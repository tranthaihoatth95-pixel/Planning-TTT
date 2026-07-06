# 🚀 Planning TTT - Deployment Guide

## Các tùy chọn triển khai

### 1. Web Deployment

#### 🟦 Vercel (Recommended)
```bash
npm install -g vercel
npm run build
vercel --prod --name planning-ttt
```

#### 🟨 Netlify
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist --site-name planning-ttt
```

#### 🟪 GitHub Pages
```bash
npm run build
# Push dist/ to gh-pages branch
git checkout --orphan gh-pages
git rm -rf .
cp -r dist/* .
git add .
git commit -m "Deploy: Planning TTT"
git push origin gh-pages
```

#### 🟧 Traditional Hosting (Nginx/Apache)
```bash
npm run build
# Upload dist/ folder to your web server
# Configure to serve index.html for all routes
```

### 2. Desktop Deployment

#### Windows Installer
```bash
npm run build:desktop
# Output: out/Planning TTT Setup x.x.x.exe
```

#### macOS DMG
```bash
npm run build:desktop
# Output: out/Planning\ TTT\ x.x.x.dmg
```

#### Linux AppImage
```bash
npm run build:desktop
# Output: out/Planning\ TTT\ x.x.x.AppImage
```

**Distribution:**
- Create GitHub Release
- Upload installer files
- Users download & install

### 3. Android Deployment

#### Build APK
```bash
npm run build:android
# Output: android/app/build/outputs/apk/release/app-release.apk
```

#### Sign APK for Google Play
```bash
# First time: Generate keystore
keytool -genkey -v -keystore planning-ttt.keystore \
  -keyalg RSA -keysize 2048 -validity 10000 \
  -alias planning-ttt

# Then build signed APK with:
./gradlew assembleRelease
```

#### Upload to Google Play
1. Go to [Google Play Console](https://play.google.com/console)
2. Create new app
3. Fill in app details:
   - Title: "Planning TTT"
   - Description: "Quản lý công việc & cảnh báo xử lý"
   - Screenshots (from mobile screenshots)
   - Icon: 512x512 PNG
   - Feature graphic: 1024x500 PNG
4. Upload APK or AAB
5. Fill pricing & distribution
6. Submit for review

#### Optimize for Oppo Find N
- Min SDK: API 24
- Target SDK: API 34+
- Supported screens: Phone, Tablet
- Permissions: INTERNET

## 📊 Pre-launch Checklist

- [ ] Update version in `package.json`
- [ ] Test all 3 platforms (Web, Desktop, Android)
- [ ] Update README with new features
- [ ] Create GitHub Release with notes
- [ ] Test installation on target devices
- [ ] Verify responsive design on foldable device
- [ ] Check accessibility (colors, text sizes)
- [ ] Performance testing (load time < 3s)
- [ ] Security audit (dependencies)

## 📈 Post-launch

### Monitoring
- Monitor error logs
- Track user feedback
- Monitor performance metrics
- Update dependencies monthly

### Updates
```bash
# Create new release tag
git tag v1.1.0
git push origin v1.1.0

# Rebuild all platforms
npm run build
npm run build:desktop
npm run build:android

# Upload to respective stores
```

## 🔄 CI/CD Setup (GitHub Actions)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]
  release:
    types: [created]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
```

## 🆘 Troubleshooting

### Web doesn't load
- Check browser console for errors
- Verify build output (dist/index.html exists)
- Check base URL in vite.config.ts

### Desktop won't start
- Check Node.js version (v16+)
- Verify Electron installed
- Check desktop/main.js for syntax errors

### APK installation fails
- Check Android version compatibility
- Verify signing certificate
- Check manifest permissions

## 📱 Device Testing

### Foldable Device (Oppo Find N)
- Test on both folded & unfolded states
- Verify CSS Grid layout changes
- Check touch responsiveness
- Test performance (no lag)

### Desktop
- Windows 10+
- macOS 10.15+
- Linux (Ubuntu 20.04+)

### Mobile (Android)
- Min API 24
- Tested on Oppo Find N
- Works on standard Android phones

## 🎯 Version Management

Keep versions consistent across:
- `package.json` version
- Git tags
- Release notes
- App version in code

---

**Deploy checklist complete? Start building! 🚀**
