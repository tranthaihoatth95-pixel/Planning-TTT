# Planning TTT - Quản lý dự án & cảnh báo xử lý

Ứng dụng quản lý dự án, công việc và cảnh báo xử lý cho 3 môi trường: **Web**, **Desktop** (Electron), và **Android** (Capacitor).

## 🎯 Tính năng chính

- ✅ Quản lý công việc (Thêm, Sửa, Xóa)
- 📊 Dashboard thống kê & Gantt chart
- 📅 Theo dõi timeline và deadline
- 🎯 Phân loại công việc theo danh mục
- 👥 Quản lý nhân lực (Crew)
- ⏱️ Tracking thời gian thực tế vs dự kiến
- 🔔 Cảnh báo quá hạn
- 💾 Lưu trữ local storage
- 📱 Tối ưu cho điện thoại gập Oppo Find N
- 🌍 Hỗ trợ tiếng Việt

## 🏗️ Cấu trúc dự án

```
Planning-TTT/
├── index.html              # Ứng dụng chính (Vanilla HTML/CSS/JS)
├── public/index.html       # Copy for web server
├── desktop/                # Electron app
│   ├── main.js            # Main process
│   └── preload.js         # Preload script
├── package.json           # Dependencies
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript config
└── README.md              # This file
```

## 🚀 Hướng dẫn chạy

### 1. Cài đặt dependencies

```bash
npm install
```

### 2. Chạy trên Web (Development)

```bash
npm run dev
# Truy cập: http://localhost:5173
```

### 3. Build cho Web (Production)

```bash
npm run build
# Output: dist/
```

### 4. Chạy trên Desktop (Electron)

```bash
npm install -g electron
npm run dev  # Terminal 1
# Terminal 2:
npx electron .
```

### 5. Build Desktop Installer

```bash
npm run build:desktop
# Output: out/Planning\ TTT\ x.x.x.exe (Windows)
```

### 6. Build cho Android

```bash
npm run build:android
# Output: android/app/build/outputs/apk/
```

## 💻 Công cụ & Thư viện

- **Vanilla JavaScript** - No framework overhead
- **HTML5 + CSS3** - Modern styling
- **Local Storage** - Client-side persistence
- **Vite** - Fast build tool
- **Electron** - Desktop apps
- **Capacitor** - Android/iOS bridge (coming)

## 📱 Responsive Design

✅ Desktop browsers
✅ Mobile browsers  
✅ Tablet & Foldable devices (Oppo Find N optimized)

**Foldable Device Optimization:**
- CSS Grid for viewport segments
- Responsive breakpoints
- Touch-friendly UI (44x44px min)
- Performance optimized

## 🎨 Tính năng UI

- Light theme with modern design
- Responsive layout
- Real-time clock & countdowns
- Gantt chart visualization
- Drag-and-drop support (future)
- Dark mode (future)

## 📊 Dashboard Features

| Feature | Status | Notes |
|---------|--------|-------|
| Task Management | ✅ | Create, edit, delete |
| Gantt Chart | ✅ | Visual timeline |
| Countdown | ✅ | Real-time tracking |
| Statistics | ✅ | Tasks, duration, crew |
| Categories | ✅ | 12 built-in categories |
| Local Storage | ✅ | Auto-save |
| PDF Export | ⏳ | Coming soon |
| Multi-project | ⏳ | Coming soon |

## 🔧 Development

### Build Commands

```bash
npm run dev              # Start dev server
npm run build            # Build web app
npm run build:desktop    # Build Electron
npm run build:android    # Build APK
```

### File Structure

- `index.html` - Main application file (Vanilla HTML)
- `desktop/main.js` - Electron entry point
- `public/` - Static assets

## 🌐 Deployment

### Web
- Vercel: `vercel deploy`
- Netlify: `netlify deploy --prod --dir=dist`
- GitHub Pages: Push `dist/` to `gh-pages`

### Desktop
- Create GitHub Release with `.exe`, `.dmg`, `.AppImage`
- Upload installers

### Android  
- Build APK: `npm run build:android`
- Submit to Google Play Store

## 📱 Platform Support

| Platform | Version | Status |
|----------|---------|--------|
| Web | Modern browsers | ✅ Complete |
| Desktop | Windows/Mac/Linux | ✅ Complete |
| Android | 6.0+ (API 24+) | ✅ Complete |
| iOS | 12.0+ | ⏳ Coming |
| Foldable | Oppo Find N | ✅ Optimized |

## 🎓 Technology Stack

- Frontend: Vanilla JS + HTML5 + CSS3
- Build: Vite
- Desktop: Electron
- Mobile: Capacitor
- Storage: LocalStorage + IndexedDB (future)

## 📄 License

MIT License - Open source

## 🆘 Support

- GitHub Issues: Report bugs
- GitHub Discussions: Ask questions
- Email: tranthaihoatth95@gmail.com

---

**Version**: 2.0.0 (Vanilla HTML Edition)  
**Last Updated**: 2024  
**Status**: Production Ready
