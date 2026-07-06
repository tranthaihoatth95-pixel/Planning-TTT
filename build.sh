#!/bin/bash

# Planning TTT - Build & Deploy Script

set -e

echo "🚀 Planning TTT - Build & Deploy"
echo "================================="

# Build Web
echo "🔨 Building Web App..."
npm run build

echo "✅ Web built successfully!"
echo "📁 Output: dist/"

echo ""
echo "Build options:"
echo "  Desktop:  npm run build:desktop"
echo "  Android:  npm run build:android"
echo ""
echo "Deploy to:"
echo "  Vercel:   vercel deploy"
echo "  Netlify:  netlify deploy --prod --dir=dist"
echo "  GitHub Pages: Push dist/ to gh-pages branch"
echo ""
