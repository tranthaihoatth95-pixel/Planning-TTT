#!/bin/bash

# Planning TTT - Installation Script for Linux/macOS

echo "📦 Planning TTT - Install Script"
echo "================================"

# Check Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is required but not installed."
    echo "📥 Install from: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"
echo "✅ npm version: $(npm -v)"

# Clone or update repo
if [ -d "Planning-TTT" ]; then
    echo "📂 Updating Planning-TTT..."
    cd Planning-TTT
    git pull origin main
else
    echo "📂 Cloning Planning-TTT repository..."
    git clone https://github.com/tranthaihoatth95-pixel/Planning-TTT.git
    cd Planning-TTT
fi

# Install dependencies
echo "📥 Installing dependencies..."
npm install

# Build web app
echo "🔨 Building web app..."
npm run build

echo ""
echo "✨ Installation completed!"
echo ""
echo "📱 To run:"
echo "  Development: npm run dev"
echo "  Desktop:     npm run build:desktop"
echo "  Android:     npm run build:android"
echo ""
echo "📖 Documentation: See README.md and SETUP.md"
echo ""
