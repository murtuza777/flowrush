# 🚀 Figma Asset Migration Guide

## ⚠️ **CRITICAL DEPLOYMENT ISSUE**

Your landing page currently uses **77 localhost URLs** from Figma MCP that will **NOT work** when deployed to Vercel or any production environment.

## 📋 **Migration Steps**

### 1. **Download Figma Assets** 
```bash
# Run the download script (if Figma MCP is running locally)
bash download-assets.sh

# OR manually download assets by visiting these URLs:
# http://localhost:3845/assets/097b6eabdca32e0125ff5f34430070e56fc8db85.png
# http://localhost:3845/assets/ff41af8af613cb639dee392d567481a321e6d54e.png
# ... (and 75 more)
```

### 2. **Organize Assets in public/assets/**
```
public/
└── assets/
    ├── hero-gradient.png
    ├── hero-preview.png
    ├── logo.png
    ├── caret-active.svg
    ├── caret.svg
    ├── stats-1.svg
    ├── stats-2.svg
    └── ... (all other assets)
```

### 3. **Update Components** (Example completed for HeroFigma.tsx)

**Before:**
```typescript
const imgGradient = "http://localhost:3845/assets/097b6eabdca32e0125ff5f34430070e56fc8db85.png";
const heroPreview = "http://localhost:3845/assets/ff41af8af613cb639dee392d567481a321e6d54e.png";
```

**After:**
```typescript
import { HERO_ASSETS } from '../assets';
// Use: HERO_ASSETS.imgGradient, HERO_ASSETS.heroPreview
```

### 4. **Components to Update**

- ✅ **HeroFigma.tsx** - COMPLETED
- ❌ **HeaderFigma.tsx** - Needs update
- ❌ **StatsSectionFigma.tsx** - Needs update  
- ❌ **WhyChoose.tsx** - Needs update
- ❌ **WhyTrust.tsx** - Needs update
- ❌ **Tools.tsx** - Needs update
- ❌ **PartnerExcellence.tsx** - Needs update
- ❌ **Footer.tsx** - Needs update

### 5. **Asset Mapping Reference**

| Component | Asset Count | Status |
|-----------|-------------|---------|
| HeroFigma | 2 assets | ✅ Done |
| HeaderFigma | 3 assets | ❌ Pending |
| StatsSectionFigma | 25 assets | ❌ Pending |
| WhyChoose | 15 assets | ❌ Pending |
| WhyTrust | 11 assets | ❌ Pending |
| Tools | 18 assets | ❌ Pending |
| PartnerExcellence | 1 asset | ❌ Pending |
| Footer | 1 asset | ❌ Pending |

## 🔧 **Quick Fix Commands**

### Download All Assets (if Figma MCP is running):
```bash
# Create assets directory
mkdir -p public/assets

# Download key assets (replace with actual URLs from your code)
curl -o public/assets/hero-gradient.png "http://localhost:3845/assets/097b6eabdca32e0125ff5f34430070e56fc8db85.png"
curl -o public/assets/hero-preview.png "http://localhost:3845/assets/ff41af8af613cb639dee392d567481a321e6d54e.png"
curl -o public/assets/logo.png "http://localhost:3845/assets/bc279bc77c1bdeb307f551ea573887432a096828.png"
# ... continue for all 77 assets
```

### Update Component Pattern:
```typescript
// 1. Add import at top
import { COMPONENT_ASSETS } from '../assets';

// 2. Replace localhost URLs with asset references
// Before: src="http://localhost:3845/assets/..."
// After: src={COMPONENT_ASSETS.assetName}
```

## 🚨 **Deployment Checklist**

- [ ] All 77 assets downloaded to `public/assets/`
- [ ] All components updated to use asset system
- [ ] Test locally: `npm run dev`
- [ ] Verify assets load correctly
- [ ] Deploy to Vercel
- [ ] Test production deployment

## 💡 **Alternative Solutions**

### Option 1: Use CDN/Cloud Storage
```typescript
const BASE_URL = 'https://your-cdn.com/assets';
```

### Option 2: Use Vercel's Asset Optimization
```typescript
// Vercel automatically optimizes assets in public/
const BASE_URL = '/assets';
```

### Option 3: Convert to Base64 (for small assets)
```typescript
// For very small SVGs, embed directly in code
const iconSvg = "data:image/svg+xml;base64,PHN2Zy4uLg==";
```

## 🎯 **Priority Order**

1. **HIGH**: Download all assets to `public/assets/`
2. **HIGH**: Update HeroFigma.tsx (✅ Done)
3. **MEDIUM**: Update HeaderFigma.tsx and Footer.tsx
4. **MEDIUM**: Update remaining components
5. **LOW**: Test and optimize

## 📞 **Need Help?**

If you need assistance completing the migration, I can help update the remaining components once you have the assets downloaded.
