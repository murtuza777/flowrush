# Figma Asset Download Script for Windows PowerShell
# Run this script to download assets from Figma MCP localhost URLs

Write-Host "🚀 Figma Asset Migration Script for Windows" -ForegroundColor Green
Write-Host "=============================================" -ForegroundColor Green

# Create assets directory
if (!(Test-Path "public/assets")) {
    New-Item -ItemType Directory -Path "public/assets" -Force
    Write-Host "✅ Created public/assets directory" -ForegroundColor Green
}

# Array of asset URLs and their target filenames
$assets = @(
    @{url="http://localhost:3845/assets/097b6eabdca32e0125ff5f34430070e56fc8db85.png"; file="hero-gradient.png"},
    @{url="http://localhost:3845/assets/ff41af8af613cb639dee392d567481a321e6d54e.png"; file="hero-preview.png"},
    @{url="http://localhost:3845/assets/bc279bc77c1bdeb307f551ea573887432a096828.png"; file="logo.png"},
    @{url="http://localhost:3845/assets/4eee31e02b8f8a810343ed63ce8f90764cacbafc.svg"; file="caret-active.svg"},
    @{url="http://localhost:3845/assets/e5fc45282e47732391df61a2c6fb461d586bcb3e.svg"; file="caret.svg"}
    # Add more assets as needed...
)

Write-Host "📥 Downloading assets from Figma MCP..." -ForegroundColor Yellow
Write-Host ""

$successCount = 0
$failCount = 0

foreach ($asset in $assets) {
    $outputPath = "public/assets/$($asset.file)"
    
    try {
        Write-Host "Downloading: $($asset.file)" -ForegroundColor Cyan
        
        # Download the asset
        Invoke-WebRequest -Uri $asset.url -OutFile $outputPath -ErrorAction Stop
        
        Write-Host "✅ Downloaded: $($asset.file)" -ForegroundColor Green
        $successCount++
    }
    catch {
        Write-Host "❌ Failed to download: $($asset.file)" -ForegroundColor Red
        Write-Host "   Error: $($_.Exception.Message)" -ForegroundColor Red
        $failCount++
    }
}

Write-Host ""
Write-Host "📊 Download Summary:" -ForegroundColor Yellow
Write-Host "✅ Successful: $successCount" -ForegroundColor Green
Write-Host "❌ Failed: $failCount" -ForegroundColor Red

if ($failCount -gt 0) {
    Write-Host ""
    Write-Host "⚠️  Some downloads failed. This might be because:" -ForegroundColor Yellow
    Write-Host "   1. Figma MCP is not running locally" -ForegroundColor White
    Write-Host "   2. The localhost:3845 server is not accessible" -ForegroundColor White
    Write-Host "   3. Network connectivity issues" -ForegroundColor White
    Write-Host ""
    Write-Host "💡 You can manually download these assets by:" -ForegroundColor Cyan
    Write-Host "   1. Opening the URLs in your browser" -ForegroundColor White
    Write-Host "   2. Right-clicking and 'Save As...'" -ForegroundColor White
    Write-Host "   3. Saving them in the public/assets/ directory" -ForegroundColor White
}

Write-Host ""
Write-Host "🎉 Asset download process complete!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Next steps:" -ForegroundColor Yellow
Write-Host "1. Verify all assets downloaded correctly" -ForegroundColor White
Write-Host "2. Update your components to use the new asset system" -ForegroundColor White
Write-Host "3. Test locally: npm run dev" -ForegroundColor White
Write-Host "4. Deploy to Vercel - assets will now work in production!" -ForegroundColor White
