@echo off
title Ayurvedic RAG Nutrition Engine

echo 🌿 Starting Ayurvedic RAG Nutrition Engine...
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js not found. Please install Node.js 16+
    pause
    exit /b 1
)

REM Check if dependencies are installed
if not exist "node_modules" (
    echo 📦 Installing dependencies...
    call npm run install:all
)

REM Check environment file
if not exist "backend\.env" (
    echo ⚠️  Environment file missing. Running setup...
    call setup.bat
)

echo 🚀 Starting servers...
echo.
echo Press Ctrl+C to stop all servers
echo.

node start.js

echo.
echo ✅ Servers stopped
pause