# 🌿 Ayurvedic RAG Nutrition Engine

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-16+-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18+-blue.svg)](https://reactjs.org/)
[![Groq](https://img.shields.io/badge/AI-Groq-orange.svg)](https://groq.com/)
[![Ayurveda](https://img.shields.io/badge/Traditional-Ayurveda-brown.svg)](https://en.wikipedia.org/wiki/Ayurveda)

An AI-powered nutrition system that generates personalized Ayurvedic diet plans using Retrieval-Augmented Generation (RAG) technology.

> **Smart India Hackathon 2025** - Combining ancient Ayurvedic wisdom with modern AI technology

## ✨ Features

- **🔍 RAG-Powered AI**: Uses FAISS vector search with 59K+ Ayurvedic text chunks
- **🌿 Dosha-Based Matching**: Intelligent ingredient and recipe selection based on patient constitution
- **📊 Real-time Logging**: Live server logs with filtering and search
- **🎨 Beautiful UI**: Modern React interface with Ayurvedic theming
- **💾 Offline Storage**: Local file-based storage, no external databases required
- **🔒 Secure Authentication**: JWT-based dietitian authentication

## 🚀 Quick Start

### Prerequisites
- Node.js (v16+)
- Your data files: `faiss_index.bin`, `text_chunks.txt`, `ingredients.json`, `recipes.json`
- Groq API key (get from https://console.groq.com/)

### Installation
```bash
# 1. Install dependencies
npm run install:all

# 2. Setup environment (Windows/Linux)
setup.bat  # Windows
./setup.sh # Linux/Mac

# 3. Add your Groq API key to backend/.env
# GROQ_API_KEY=your_key_here

# 4. Place your data files in backend/data/
cp your_files/* backend/data/

# 5. Start the application
npm start
```

### Access Points
- **Main App**: http://localhost:3000
- **Log Viewer**: Open `log-viewer.html` in browser
- **API Health**: http://localhost:5000/api/health

## 📁 Project Structure

```
├── docs/                   # 📚 Complete documentation
├── scripts/                # 🛠️ Utility scripts & testing
├── backend/                # 🖥️ Node.js API server
│   ├── data/              # Your RAG data files
│   ├── services/          # Core services (storage, vector, groq, logger)
│   └── routes/            # API endpoints
├── frontend/              # 🎨 React application
│   └── src/
│       ├── components/    # UI components
│       ├── pages/         # Application pages
│       └── services/      # API client
└── Startup & Config       # 🚀 Various startup options
```

📖 **[View Complete Structure](PROJECT_STRUCTURE.md)**

## 🔧 Configuration

### Environment Variables (.env)
```bash
PORT=5000
JWT_SECRET=your_secret_key
GROQ_API_KEY=your_groq_api_key
USE_LOCAL_STORAGE=true
```

### Data Files (backend/data/)
- `faiss_index.bin` - Vector index for semantic search
- `text_chunks.txt` - Ayurvedic knowledge chunks
- `ingredients.json` - Ingredient database with dosha effects
- `recipes.json` - Recipe database with dosha focus

## 🧪 Testing

```bash
# Test RAG components
npm run test:rag

# Test storage system
npm run test:storage

# Test graceful shutdown
npm run test:shutdown

# Check data files status
npm run check:data
```

## 📊 RAG Pipeline

1. **Patient Analysis**: Extract constitution and imbalance data
2. **Ingredient Matching**: Find dosha-balancing ingredients
3. **Recipe Selection**: Choose appropriate recipes
4. **Vector Search**: Retrieve relevant Ayurvedic knowledge
5. **AI Generation**: Create personalized diet plan with Groq

## 🔍 Monitoring

### Real-time Logs
- Open `log-viewer.html` in your browser
- Enter your JWT token (from login)
- View live server logs with filtering

### Log Levels
- **INFO**: General information
- **SUCCESS**: Successful operations
- **WARNING**: Non-critical issues
- **ERROR**: Error conditions
- **DEBUG**: Detailed debugging info

## 🎯 Usage Flow

1. **Register/Login** as a dietitian
2. **Add Patients** with Ayurvedic constitution details
3. **Generate Diet Plans** using natural language queries
4. **View Results** with beautiful markdown formatting
5. **Monitor System** through real-time logs

## 📚 Documentation

- **[Setup Guide](docs/SETUP.md)** - Installation & configuration
- **[Startup Guide](docs/STARTUP.md)** - Different ways to start
- **[API Documentation](docs/API.md)** - Backend endpoints
- **[Architecture](docs/ARCHITECTURE.md)** - System design
- **[Data Setup](docs/DATA_SETUP.md)** - RAG data configuration

## 🛠️ Development

### Start Development Servers
```bash
# Backend only
cd backend && npm run dev

# Frontend only  
cd frontend && npm start

# Both together
npm run dev
```

### API Endpoints
- `POST /api/auth/register` - Register dietitian
- `POST /api/auth/login` - Login
- `GET /api/patients` - List patients
- `POST /api/patients` - Add patient
- `POST /api/dietplan/generate` - Generate diet plan (RAG)
- `GET /api/rag/test` - Test RAG components
- `GET /api/logs/stream` - Live log stream

## 📈 Performance

- **Vector Search**: 59K+ text chunks indexed
- **Response Time**: ~2-5 seconds for diet plan generation
- **Context Size**: ~12KB per RAG query
- **Storage**: Local file system, no external dependencies

## 🔒 Security

- JWT-based authentication
- Patient data isolation by dietitian
- Local storage only (no cloud dependencies)
- Input validation and sanitization

## 🌟 Key Technologies

- **Backend**: Node.js, Express, Groq API
- **Frontend**: React, Tailwind CSS, React Markdown
- **AI**: Groq (Llama 3.1), FAISS vector search
- **Storage**: Local JSON files, in-memory caching
- **Logging**: Custom logger with real-time streaming

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Traditional Ayurvedic texts (Charaka Samhita, Sushruta Samhita)
- Modern Ayurvedic research community
- Open source libraries and tools used
- Smart India Hackathon 2025 organizers

## 📞 Support

- 📖 **Documentation**: Check the `docs/` folder
- 🐛 **Issues**: Report bugs via GitHub Issues
- 💬 **Discussions**: Use GitHub Discussions

---

**Built for the Smart India Hackathon 2025** 🇮🇳

*Combining ancient Ayurvedic wisdom with modern AI technology*