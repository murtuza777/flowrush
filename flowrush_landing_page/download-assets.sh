#!/bin/bash

# Figma Asset Download Script
# This script helps download assets from Figma MCP localhost URLs
# and organize them for production deployment

echo "🚀 Figma Asset Migration Script"
echo "================================"

# Create assets directory
mkdir -p public/assets

# Array of all Figma asset URLs found in your codebase
declare -a ASSETS=(
    # Hero Section
    "http://localhost:3845/assets/097b6eabdca32e0125ff5f34430070e56fc8db85.png:hero-gradient.png"
    "http://localhost:3845/assets/ff41af8af613cb639dee392d567481a321e6d54e.png:hero-preview.png"
    
    # Header Assets
    "http://localhost:3845/assets/bc279bc77c1bdeb307f551ea573887432a096828.png:logo.png"
    "http://localhost:3845/assets/4eee31e02b8f8a810343ed63ce8f90764cacbafc.svg:caret-active.svg"
    "http://localhost:3845/assets/e5fc45282e47732391df61a2c6fb461d586bcb3e.svg:caret.svg"
    
    # Stats Section (first 10 for example)
    "http://localhost:3845/assets/469ff531bf2f90e7dae19517b3c8817ef4e81e56.svg:stats-1.svg"
    "http://localhost:3845/assets/75aafd4050c08fa695eac9fea001ca819f9db7ff.svg:stats-2.svg"
    "http://localhost:3845/assets/9aa09d9fbeda8982810d48a90fe1d791ddbb9ea7.svg:stats-3.svg"
    "http://localhost:3845/assets/194daa3de9578f76bceafd3d4ed4fd0f0631d597.svg:stats-4.svg"
    "http://localhost:3845/assets/e3b14d4751384c03cd9a144a3fcd65f78531ef29.svg:stats-5.svg"
    
    # Add more assets as needed...
)

echo "📥 Downloading assets from Figma MCP..."
echo ""

# Download each asset
for asset in "${ASSETS[@]}"; do
    IFS=':' read -r url filename <<< "$asset"
    echo "Downloading: $filename"
    
    # Download the asset
    if curl -s -o "public/assets/$filename" "$url"; then
        echo "✅ Downloaded: $filename"
    else
        echo "❌ Failed to download: $filename"
    fi
done

echo ""
echo "🎉 Asset download complete!"
echo ""
echo "📋 Next steps:"
echo "1. Verify all assets downloaded correctly"
echo "2. Update your components to use the new asset system"
echo "3. Test locally to ensure everything works"
echo "4. Deploy to Vercel - assets will now work in production!"
echo ""
echo "💡 Tip: You can manually download remaining assets by visiting the localhost URLs"
echo "   and saving them with the appropriate names in public/assets/"
