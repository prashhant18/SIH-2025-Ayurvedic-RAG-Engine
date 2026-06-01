const { spawn } = require('child_process');
const path = require('path');

// Simple development starter with better process management
console.log('🌿 Starting Ayurvedic RAG System (Development Mode)\n');

let backend, frontend;
let isShuttingDown = false;

// Start backend
console.log('📡 Starting backend...');
backend = spawn('npm', ['run', 'dev'], {
  cwd: path.join(__dirname, 'backend'),
  stdio: 'inherit',
  shell: true
});

// Start frontend after delay
setTimeout(() => {
  console.log('🎨 Starting frontend...');
  frontend = spawn('npm', ['start'], {
    cwd: path.join(__dirname, 'frontend'),
    stdio: 'inherit',
    shell: true
  });
}, 3000);

// Cleanup function
const cleanup = () => {
  if (isShuttingDown) return;
  isShuttingDown = true;
  
  console.log('\n🛑 Shutting down...');
  
  if (backend) {
    backend.kill('SIGTERM');
    console.log('📡 Backend stopped');
  }
  
  if (frontend) {
    frontend.kill('SIGTERM');
    console.log('🎨 Frontend stopped');
  }
  
  setTimeout(() => {
    console.log('✅ Shutdown complete');
    process.exit(0);
  }, 1000);
};

// Handle signals
process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);

// Handle child exits
if (backend) {
  backend.on('close', () => {
    if (!isShuttingDown) {
      console.log('📡 Backend exited');
      cleanup();
    }
  });
}

setTimeout(() => {
  if (frontend) {
    frontend.on('close', () => {
      if (!isShuttingDown) {
        console.log('🎨 Frontend exited');
        cleanup();
      }
    });
  }
}, 4000);