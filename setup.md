# Ayurvedic Nutrition Engine - Setup Guide

## Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Groq API key (get from https://console.groq.com/)
- IBM Cloudant account (optional for MVP - will use mock data)

## Quick Start

### 1. Install Dependencies
```bash
# Install root dependencies
npm install

# Install all project dependencies
npm run install:all
```

### 2. Backend Setup
```bash
# Navigate to backend
cd backend

# Copy environment file
cp .env.example .env

# Edit .env file and add your Groq API key
# GROQ_API_KEY=your_groq_api_key_here
```

### 3. Frontend Setup
```bash
# Navigate to frontend
cd frontend

# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 4. Start Development Servers
```bash
# From root directory - starts both backend and frontend
npm run dev

# Or start individually:
# Backend: cd backend && npm run dev
# Frontend: cd frontend && npm start
```

## API Endpoints

### Authentication
- POST `/api/auth/register` - Register new dietitian
- POST `/api/auth/login` - Login
- GET `/api/auth/verify` - Verify token

### Patients
- GET `/api/patients` - Get all patients
- GET `/api/patients/:id` - Get specific patient
- POST `/api/patients` - Add new patient
- PUT `/api/patients/:id` - Update patient

### Diet Plan Generation
- POST `/api/dietplan/generate` - Generate diet plan (RAG core)

## Testing the MVP

1. **Register/Login**: Create a dietitian account
2. **Add Patient**: Add a patient with Ayurvedic constitution details
3. **Generate Plan**: Use the RAG system to generate personalized diet plans

## Key Features Implemented

✅ Secure dietitian authentication
✅ Patient data management
✅ RAG-powered diet plan generation with Groq API
✅ Responsive React frontend with Tailwind CSS
✅ Mock data for development (no Cloudant required initially)

## Next Steps

1. Get your Groq API key and add it to `.env`
2. Run the setup commands above
3. Start developing and testing the RAG functionality
4. Later: Set up IBM Cloudant for production data
5. Later: Implement vector database (FAISS) for better RAG

## Architecture Notes

- **Backend**: Node.js/Express with modular route structure
- **Frontend**: React with Context API for state management
- **AI**: Groq API (Mixtral model) for diet plan generation
- **Database**: Mock data initially, IBM Cloudant for production
- **Styling**: Tailwind CSS with custom Ayurveda theme

The MVP focuses on demonstrating the core RAG functionality with a clean, working interface.