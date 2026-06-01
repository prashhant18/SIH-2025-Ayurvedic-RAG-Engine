@echo off
setlocal enabledelayedexpansion

echo 🌿 Ayurvedic RAG Nutrition Engine Setup
echo ========================================

REM Check Node.js
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js not found. Please install Node.js 16+
    pause
    exit /b 1
)

echo 📦 Installing dependencies...
call npm run install:all

echo 🔧 Setting up environment...
if not exist "backend\.env" (
    copy "backend\.env.example" "backend\.env"
    echo ⚠️  Please edit backend\.env and add your GROQ_API_KEY
) else (
    echo ✅ Environment file exists
)

echo 📁 Checking data files...
set DATA_DIR=backend\data
set FOUND=0

if exist "%DATA_DIR%\faiss_index.bin" (
    echo ✅ faiss_index.bin
    set /a FOUND+=1
) else (
    echo ⚠️  faiss_index.bin ^(missing - will use sample data^)
)

if exist "%DATA_DIR%\text_chunks.txt" (
    echo ✅ text_chunks.txt
    set /a FOUND+=1
) else (
    echo ⚠️  text_chunks.txt ^(missing - will use sample data^)
)

if exist "%DATA_DIR%\ingredients.json" (
    echo ✅ ingredients.json
    set /a FOUND+=1
) else (
    echo ⚠️  ingredients.json ^(missing - will use sample data^)
)

if exist "%DATA_DIR%\recipes.json" (
    echo ✅ recipes.json
    set /a FOUND+=1
) else (
    echo ⚠️  recipes.json ^(missing - will use sample data^)
)

echo.
echo ========================================
echo 🚀 Setup Complete!
echo.
echo Next steps:
echo 1. Add your GROQ API key to backend\.env
echo 2. Place your data files in backend\data\ ^(optional^)
echo 3. Run: npm start
echo.
echo Found !FOUND!/4 data files - Ready to start!
pause