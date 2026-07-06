# Hướng dẫn cài đặt & triển khai

## Yêu cầu hệ thống

- **Node.js**: v16+ 
- **npm** hoặc **yarn**
- **Git**

### Cho Desktop (Electron)
- Windows / macOS / Linux

### Cho Android
- Android Studio
- Android SDK (API 24+)
- Android NDK (tùy chọn)

## Installation

### 1. Clone repository

```bash
git clone https://github.com/tranthaihoatth95-pixel/Planning-TTT.git
cd Planning-TTT
```

### 2. Cài dependencies

```bash
npm install
```

### 3. Tạo file `.env` (nếu cần)

```env
# Mặc định đã có trong config
NODE_ENV=development
```

## Chạy ứng dụng

### Web Development

```bash
npm run dev
```

Truy cập: `http://localhost:5173`

### Web Production Build

```bash
npm run build
npm run preview
```

### Desktop (Electron)

**Terminal 1 - Start dev server:**
```bash
npm run dev
```

**Terminal 2 - Start Electron:**
```bash
npm install -g electron-dev-runner
# hoặc chạy trực tiếp:
npx electron desktop/main.js
```

### Android Build

```bash
# Đầu tiên build web
npm run build

# Sau đó xây dựng APK
npm run build:android
```

APK file sẽ được tạo tại: `android/app/build/outputs/apk/release/app-release.apk`

## Triển khai

### Triển khai Web

1. **Vercel**
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Netlify**
   ```bash
   npm install -g netlify-cli
   netlify deploy
   ```

3. **GitHub Pages**
   - Build: `npm run build`
   - Deploy folder `dist/` to GitHub Pages

### Triển khai Desktop

```bash
npm run build:desktop
```

Tạo installer cho Windows/Mac/Linux

### Triển khai Android

1. Đăng ký tài khoản Google Play Console
2. Upload `app-release.apk` hoặc `app-release.aab`
3. Điền thông tin ứng dụng
4. Gửi để duyệt

## Cấu hình nâng cao

### Tailwind CSS Customization

Edit `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#4f46e5',
      },
    },
  },
}
```

### Vite Configuration

Edit `vite.config.ts` cho các tùy chọn như:
- Port dev server
- Proxy
- Build optimization

## Troubleshooting

### Port 5173 đã được dùng

```bash
# Chỉ định port khác:
npm run dev -- --port 3000
```

### Lỗi Electron build

```bash
# Xóa cache
rm -rf node_modules
npm install

# Build lại
npm run build:desktop
```

### Lỗi Android build

```bash
# Xóa build cache
./gradlew clean
npm run build:android
```

## Scripts khác

```bash
# Lint code
npm run lint

# Format code
npm run format

# Test (nếu có)
npm test
```

---

**Cần giúp?** Liên hệ qua [GitHub Issues](https://github.com/tranthaihoatth95-pixel/Planning-TTT/issues)
