# Planning TTT - Quản lý công việc & cảnh báo xử lý

Ứng dụng quản lý công việc và cảnh báo xử lý cho 3 môi trường: **Web**, **Desktop** (Electron), và **Android** (React Native).

## 🎯 Tính năng chính

- ✅ Tạo, sửa, xóa công việc
- 📅 Theo dõi thời hạn hoàn thành
- 🎯 Ưu tiên công việc (Cao, Trung bình, Thấp)
- 👤 Gán công việc cho người khác
- 📊 Dashboard thống kê công việc
- 📱 Tối ưu cho điện thoại gập Oppo Find N
- 🌍 Hỗ trợ tiếng Việt

## 🏗️ Cấu trúc dự án

```
Planning-TTT/
├── src/                    # Mã nguồn chung (React)
│   ├── components/        # Components dùng chung
│   ├── pages/            # Trang chính (Dashboard)
│   ├── stores/           # State management (Zustand)
│   └── main.tsx          # Entry point
├── desktop/              # Ứng dụng Desktop (Electron)
│   ├── main.js          # Electron main process
│   └── preload.js       # Preload script
├── mobile/              # Ứng dụng Android (React Native)
│   ├── App.tsx         # App component
│   └── TaskFormMobile.tsx, TaskListMobile.tsx
├── public/             # Assets tĩnh
├── index.html          # HTML entry point
├── vite.config.ts      # Cấu hình Vite
├── tailwind.config.js  # Cấu hình Tailwind CSS
└── package.json        # Dependencies
```

## 🚀 Hướng dẫn cài đặt & chạy

### 1. Cài đặt dependencies

```bash
npm install
```

### 2. Chạy ứng dụng Web (Development)

```bash
npm run dev
# Mở: http://localhost:5173
```

### 3. Build ứng dụng Web

```bash
npm run build
```

### 4. Build Desktop (Electron)

```bash
npm run build:desktop
```

### 5. Build Android (APK)

```bash
npm run build:android
```

## 🎨 Công cụ & thư viện

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Zustand** - State management
- **Electron** - Desktop app
- **React Native** - Android app

## 📱 Tối ưu cho Oppo Find N

Ứng dụng đã được tối ưu cho điện thoại gập:
- Responsive layout cho màn hình gập
- Touch-friendly UI (44x44px min buttons)
- CSS Grid support cho viewport segments
- Performance optimized

## 📦 Nền tảng được hỗ trợ

| Nền tảng | Trạng thái | Ghi chú |
|---------|-----------|---------|
| Web | ✅ Hoàn thành | Desktop & Mobile |
| Desktop | ✅ Hoàn thành | Windows/Mac/Linux |
| Android | ✅ Hoàn thành | Oppo Find N optimized |

## 📄 Tài liệu thêm

- [SETUP.md](SETUP.md) - Hướng dẫn cài đặt chi tiết
- [LICENSE](LICENSE) - MIT License

---

**Phiên bản**: 1.0.0
