const { spawn, exec } = require('child_process');
const path = require('path');
const fs = require('fs');

// Colors for console output
const colors = {
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  cyan: '\x1b[36m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

function log(color, icon, message) {
  console.log(`${colors[color]}${icon} ${message}${colors.reset}`);
}

function checkDataFiles() {
  const dataDir = path.join(__dirname, 'backend', 'data');
  const requiredFiles = ['faiss_index.bin', 'text_chunks.txt', 'ingredients.json', 'recipes.json'];
  
  let filesFound = 0;
  requiredFiles.forEach(file => {
    if (fs.existsSync(path.join(dataDir, file))) {
      filesFound++;
    }
  });
  
  return { total: requiredFiles.length, found: filesFound };
}

async function startSystem() {
  console.clear();
  
  // Header
  console.log(`${colors.bold}${colors.green}`);
  console.log('╔══════════════════════════════════════════════════════════════╗');
  console.log('║                🌿 AYURVEDIC RAG NUTRITION ENGINE 🌿          ║');
  console.log('║                   Smart India Hackathon 2025                 ║');
  console.log('╚══════════════════════════════════════════════════════════════╝');
  console.log(`${colors.reset}\n`);

  // Check data files
  log('cyan', '🔍', 'Checking data files...');
  const dataStatus = checkDataFiles();
  
  if (dataStatus.found === dataStatus.total) {
    log('green', '✅', `All ${dataStatus.total} data files found - RAG system ready!`);
  } else {
    log('yellow', '⚠️', `${dataStatus.found}/${dataStatus.total} data files found - using sample data`);
  }

  // Check environment
  const envPath = path.join(__dirname, 'backend', '.env');
  if (fs.existsSync(envPath)) {
    log('green', '✅', 'Environment configuration found');
  } else {
    log('red', '❌', 'Environment file missing - copy .env.example to .env');
    return;
  }

  console.log('\n' + '─'.repeat(60) + '\n');

  // Start backend
  log('blue', '📡', 'Starting backend server...');
  const backend = spawn('npm', ['run', 'dev'], {
    cwd: path.join(__dirname, 'backend'),
    stdio: ['inherit', 'pipe', 'pipe'],
    shell: true
  });

  // Capture backend output
  backend.stdout.on('data', (data) => {
    const output = data.toString().trim();
    if (output) {
      console.log(`${colors.blue}[BACKEND]${colors.reset} ${output}`);
    }
  });

  backend.stderr.on('data', (data) => {
    const output = data.toString().trim();
    if (output && !output.includes('DeprecationWarning')) {
      console.log(`${colors.yellow}[BACKEND]${colors.reset} ${output}`);
    }
  });

  // Wait for backend to be ready
  await new Promise(resolve => setTimeout(resolve, 4000));

  // Start frontend
  log('cyan', '🎨', 'Starting frontend application...');
  const frontend = spawn('npm', ['start'], {
    cwd: path.join(__dirname, 'frontend'),
    stdio: ['inherit', 'pipe', 'pipe'],
    shell: true
  });

  // Capture frontend output
  frontend.stdout.on('data', (data) => {
    const output = data.toString().trim();
    if (output && !output.includes('webpack')) {
      console.log(`${colors.cyan}[FRONTEND]${colors.reset} ${output}`);
    }
  });

  frontend.stderr.on('data', (data) => {
    const output = data.toString().trim();
    if (output && !output.includes('DeprecationWarning') && !output.includes('webpack')) {
      console.log(`${colors.yellow}[FRONTEND]${colors.reset} ${output}`);
    }
  });

  // Wait a bit more then show access info
  setTimeout(() => {
    console.log('\n' + '═'.repeat(60));
    console.log(`${colors.bold}${colors.green}🚀 SYSTEM READY!${colors.reset}\n`);
    
    console.log(`${colors.bold}Access Points:${colors.reset}`);
    console.log(`  🌐 Main Application: ${colors.cyan}http://localhost:3000${colors.reset}`);
    console.log(`  📊 API Health Check: ${colors.cyan}http://localhost:5000/api/health${colors.reset}`);
    console.log(`  📋 Log Viewer: ${colors.cyan}Open log-viewer.html in browser${colors.reset}`);
    
    console.log(`\n${colors.bold}Quick Start:${colors.reset}`);
    console.log(`  1. Register as a dietitian`);
    console.log(`  2. Add a patient with dosha details`);
    console.log(`  3. Generate personalized diet plans`);
    console.log(`  4. View real-time logs for RAG pipeline`);
    
    console.log(`\n${colors.bold}Data Status:${colors.reset}`);
    console.log(`  📁 Using ${dataStatus.found === dataStatus.total ? 'your custom' : 'sample'} data files`);
    console.log(`  🔍 Vector search: ${dataStatus.found > 0 ? 'Ready' : 'Fallback mode'}`);
    
    console.log(`\n${colors.yellow}Press Ctrl+C to stop all servers${colors.reset}`);
    console.log('═'.repeat(60) + '\n');
  }, 6000);

  // Handle process cleanup
  let isShuttingDown = false;
  
  const cleanup = (signal = 'SIGINT') => {
    if (isShuttingDown) return;
    isShuttingDown = true;
    
    console.log(`\n${colors.yellow}🛑 Shutting down gracefully... (${signal})${colors.reset}`);
    
    // Kill processes gracefully
    try {
      if (backend && !backend.killed) {
        backend.kill('SIGTERM');
        log('blue', '📡', 'Backend server stopped');
      }
      if (frontend && !frontend.killed) {
        frontend.kill('SIGTERM');
        log('cyan', '🎨', 'Frontend server stopped');
      }
    } catch (error) {
      console.error('Error during cleanup:', error.message);
    }
    
    // Force exit after timeout
    setTimeout(() => {
      try {
        if (backend && !backend.killed) backend.kill('SIGKILL');
        if (frontend && !frontend.killed) frontend.kill('SIGKILL');
      } catch (error) {
        // Ignore errors during force kill
      }
      
      log('green', '✅', 'Shutdown complete');
      process.exit(0);
    }, 2000);
  };

  // Handle different termination signals
  process.on('SIGINT', () => cleanup('SIGINT'));   // Ctrl+C
  process.on('SIGTERM', () => cleanup('SIGTERM')); // Termination request
  process.on('SIGBREAK', () => cleanup('SIGBREAK')); // Windows Ctrl+Break
  
  // Handle uncaught exceptions
  process.on('uncaughtException', (error) => {
    console.error(`${colors.red}❌ Uncaught Exception:${colors.reset}`, error);
    cleanup('EXCEPTION');
  });

  // Handle child process exits
  backend.on('close', (code, signal) => {
    if (!isShuttingDown) {
      if (code !== 0 && code !== null) {
        log('red', '❌', `Backend exited unexpectedly with code ${code}`);
      } else if (signal) {
        log('blue', '📡', `Backend stopped by signal ${signal}`);
      } else {
        log('blue', '📡', 'Backend stopped');
      }
      
      // Stop frontend when backend stops
      if (frontend && !frontend.killed) {
        frontend.kill('SIGTERM');
      }
      cleanup('BACKEND_EXIT');
    }
  });

  frontend.on('close', (code, signal) => {
    if (!isShuttingDown) {
      if (code !== 0 && code !== null) {
        log('red', '❌', `Frontend exited unexpectedly with code ${code}`);
      } else if (signal) {
        log('cyan', '🎨', `Frontend stopped by signal ${signal}`);
      } else {
        log('cyan', '🎨', 'Frontend stopped');
      }
      
      // Stop backend when frontend stops
      if (backend && !backend.killed) {
        backend.kill('SIGTERM');
      }
      cleanup('FRONTEND_EXIT');
    }
  });

  // Handle process errors
  backend.on('error', (error) => {
    log('red', '❌', `Backend error: ${error.message}`);
  });

  frontend.on('error', (error) => {
    log('red', '❌', `Frontend error: ${error.message}`);
  });
}

// Start the system
startSystem().catch(error => {
  console.error(`${colors.red}❌ Failed to start system:${colors.reset}`, error);
  process.exit(1);
});