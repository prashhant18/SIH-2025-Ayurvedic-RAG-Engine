#!/bin/bash

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${GREEN}🌿 Ayurvedic RAG Nutrition Engine Setup${NC}"
echo "========================================"

# Check Node.js
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js not found. Please install Node.js 16+${NC}"
    exit 1
fi

echo -e "${BLUE}📦 Installing dependencies...${NC}"
npm run install:all

echo -e "${BLUE}🔧 Setting up environment...${NC}"
if [ ! -f "backend/.env" ]; then
    cp backend/.env.example backend/.env
    echo -e "${YELLOW}⚠️  Please edit backend/.env and add your GROQ_API_KEY${NC}"
else
    echo -e "${GREEN}✅ Environment file exists${NC}"
fi

echo -e "${BLUE}📁 Checking data files...${NC}"
DATA_DIR="backend/data"
FILES=("faiss_index.bin" "text_chunks.txt" "ingredients.json" "recipes.json")
FOUND=0

for file in "${FILES[@]}"; do
    if [ -f "$DATA_DIR/$file" ]; then
        echo -e "${GREEN}✅ $file${NC}"
        ((FOUND++))
    else
        echo -e "${YELLOW}⚠️  $file (missing - will use sample data)${NC}"
    fi
done

echo ""
echo "========================================"
echo -e "${GREEN}🚀 Setup Complete!${NC}"
echo ""
echo "Next steps:"
echo "1. Add your GROQ API key to backend/.env"
echo "2. Place your data files in backend/data/ (optional)"
echo "3. Run: npm start"
echo ""
echo -e "Found ${FOUND}/4 data files - ${GREEN}Ready to start!${NC}"