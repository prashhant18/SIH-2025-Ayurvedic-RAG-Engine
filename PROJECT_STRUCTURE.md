# 📁 Project Structure

```
ayurvedic-rag-nutrition-engine/
├── 📚 docs/                          # Documentation
│   ├── README.md                     # Documentation index
│   ├── SETUP.md                      # Setup instructions
│   ├── STARTUP.md                    # Startup guide
│   ├── DATA_SETUP.md                 # Data configuration
│   ├── API.md                        # API documentation
│   └── ARCHITECTURE.md               # System architecture
│
├── 🛠️ scripts/                       # Utility scripts
│   ├── README.md                     # Scripts documentation
│   ├── setup-data-files.js          # Check data files
│   ├── test-rag-only.js             # Test RAG components
│   ├── test-storage.js              # Test data persistence
│   └── test-shutdown.js             # Test graceful shutdown
│
├── 🖥️ backend/                       # Node.js API server
│   ├── data/                         # Data storage
│   │   ├── users.json               # Dietitians (auto-generated)
│   │   ├── patients.json            # Patients (auto-generated)
│   │   ├── ingredients.json         # Your ingredients data
│   │   ├── recipes.json             # Your recipes data
│   │   ├── text_chunks.txt          # Your knowledge chunks
│   │   ├── faiss_index.bin          # Your FAISS index
│   │   └── sample-*.json            # Fallback sample data
│   │
│   ├── services/                     # Core business logic
│   │   ├── storage.service.js       # Data storage management
│   │   ├── vector.service.js        # Vector search & FAISS
│   │   ├── groq.service.js          # AI generation with Groq
│   │   └── logger.service.js        # Logging system
│   │
│   ├── routes/                       # API endpoints
│   │   ├── auth.js                  # Authentication
│   │   ├── patients.js              # Patient management
│   │   ├── dietplan.js              # Diet plan generation (RAG)
│   │   ├── admin.js                 # Admin & analytics
│   │   ├── rag-test.js              # RAG testing endpoints
│   │   └── logs.js                  # Log streaming
│   │
│   ├── middleware/                   # Express middleware
│   │   └── auth.js                  # JWT authentication
│   │
│   ├── logs/                         # Server logs (auto-generated)
│   ├── .env                          # Environment variables
│   ├── config.js                     # Configuration
│   ├── server.js                     # Main server file
│   └── package.json                  # Backend dependencies
│
├── 🎨 frontend/                      # React application
│   ├── public/                       # Static assets
│   ├── src/
│   │   ├── components/              # Reusable UI components
│   │   │   ├── DietitianProfile.js  # Dietitian profile & stats
│   │   │   ├── DietPlanDisplay.js   # Diet plan rendering
│   │   │   ├── RAGStatus.js         # RAG system status
│   │   │   ├── LoadingSpinner.js    # Loading indicator
│   │   │   └── Navbar.js            # Navigation bar
│   │   │
│   │   ├── pages/                   # Application pages
│   │   │   ├── LoginPage.js         # Authentication
│   │   │   ├── RegisterPage.js      # User registration
│   │   │   ├── DashboardPage.js     # Main dashboard
│   │   │   ├── AddPatientPage.js    # Add new patient
│   │   │   ├── ViewPatientPage.js   # Patient details
│   │   │   └── GeneratePlanPage.js  # Diet plan generation
│   │   │
│   │   ├── contexts/                # React contexts
│   │   │   └── AuthContext.js       # Authentication state
│   │   │
│   │   ├── services/                # API client
│   │   │   └── api.js               # HTTP requests
│   │   │
│   │   ├── App.js                   # Main app component
│   │   ├── index.js                 # React entry point
│   │   └── index.css                # Tailwind CSS + custom styles
│   │
│   └── package.json                  # Frontend dependencies
│
├── 🚀 Startup Scripts
│   ├── start.js                      # Main startup script (elegant)
│   ├── dev-start.js                 # Development startup (simple)
│   ├── start.bat                    # Windows batch file
│   ├── setup.bat                    # Windows setup script
│   └── setup.sh                     # Linux/Mac setup script
│
├── 📊 Monitoring & Logs
│   └── log-viewer.html              # Real-time log viewer
│
├── 📄 Configuration
│   ├── package.json                 # Root package.json with scripts
│   ├── README.md                    # Main project README
│   └── PROJECT_STRUCTURE.md         # This file
│
└── 🧪 Testing (via npm scripts)
    ├── npm run test:rag             # Test RAG system
    ├── npm run test:storage         # Test data persistence
    ├── npm run test:shutdown        # Test graceful shutdown
    └── npm run check:data           # Check data files
```

## 🎯 Key Directories

- **`docs/`** - All documentation in one place
- **`scripts/`** - Utility scripts for testing and setup
- **`backend/`** - Complete Node.js API with services architecture
- **`frontend/`** - React application with component-based structure
- **Root level** - Startup scripts and configuration

## 🚀 Quick Navigation

- **Setup**: `docs/SETUP.md`
- **Start**: `npm start` or `start.bat`
- **API Docs**: `docs/API.md`
- **Architecture**: `docs/ARCHITECTURE.md`
- **Scripts**: `scripts/README.md`

## 📦 Dependencies

- **Root**: Startup and testing scripts
- **Backend**: Node.js, Express, Groq SDK, JWT, etc.
- **Frontend**: React, Tailwind CSS, Axios, etc.

This structure provides clear separation of concerns, easy navigation, and professional organization.