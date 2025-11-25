# Crime Alert App

A mobile application for real-time crime alerts and geofencing-based monitoring. Stay informed about safety incidents in your area and receive notifications when entering monitored zones.

## 🚀 Features

- 📍 **Geofencing**: Create custom monitored zones with adjustable radius
- 🔔 **Real-time Alerts**: Receive instant notifications about crime incidents
- 🗺️ **Interactive Map**: Visualize zones and alerts on an interactive map
- 👤 **User Authentication**: Secure login and registration system
- ⚙️ **Settings**: Customize notification preferences and app behavior
- 📱 **Cross-platform**: Works on iOS, Android, and Web

## 📁 Project Structure

```
CrimeAlertApp/
│
├── crimeAlert-frontend/        # React Native (Expo) mobile app
│   ├── app/                    # App routes (Expo Router)
│   │   ├── index.tsx           # Home screen
│   │   ├── login.tsx           # Login page
│   │   ├── register.tsx        # Register page
│   │   ├── add-zone.tsx        # Add Zone page
│   │   ├── zones.tsx           # My Zones page
│   │   ├── alerts.tsx          # Alerts page
│   │   └── settings.tsx        # Settings page
│   │
│   └── src/                    # Source files
│       ├── components/         # Reusable UI components
│       ├── context/            # Global state management
│       ├── hooks/              # Custom React hooks
│       ├── services/           # API integration
│       ├── utils/              # Helper functions
│       └── styles/             # Global styles
│
├── crimeAlert-backend/         # Backend API (Node.js)
│
└── admin/                      # Admin panel
```

## 🛠️ Technologies

### Frontend

- **React Native** with Expo
- **Expo Router** for navigation
- **TypeScript** for type safety
- **React Context** for state management

### Backend

- Node.js / Express (to be implemented)
- MongoDB / PostgreSQL (to be implemented)

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)

### Frontend Setup

```bash
cd crimeAlert-frontend
npm install
npm start
```

Then press:

- `w` for web
- `a` for Android (requires Android Studio)
- `i` for iOS (requires Xcode on Mac)

## 🏗️ Development Status

### ✅ Completed

- Clean project structure setup
- Comment-only file templates with detailed TODO descriptions
- All 7 main app screens created
- Reusable component templates
- Service layer structure
- Context and hooks setup
- Geofencing utilities structure
- Theme and constants configuration

### 🚧 In Progress

- Implementing screen functionality
- Backend API development
- Database design
- Map integration

### 📋 TODO

- [ ] Implement authentication flow
- [ ] Add map integration (react-native-maps)
- [ ] Connect to backend API
- [ ] Implement geofencing logic
- [ ] Add push notifications
- [ ] Set up AsyncStorage for persistence
- [ ] Create admin panel
- [ ] Add data visualization
- [ ] Write unit tests
- [ ] Deploy to production

## 🗺️ App Screens

1. **Home** - Dashboard with map and nearby alerts
2. **Login** - User authentication
3. **Register** - New user registration
4. **Add Zone** - Create monitored zones with geofencing
5. **Zones** - View and manage all zones
6. **Alerts** - Browse crime alerts and notifications
7. **Settings** - Configure app preferences

## 🔧 Configuration

### Required Packages (Not Yet Installed)

```bash
# Location services
npm install expo-location

# Maps
npm install react-native-maps

# Storage
npm install @react-native-async-storage/async-storage
```

### Environment Variables

Create a `.env` file in the frontend directory:

```
API_BASE_URL=http://localhost:3000/api
```

## 📱 API Integration

All API services are structured in `src/services/`:

- `authService.ts` - Authentication endpoints
- `zoneService.ts` - Zone CRUD operations
- `alertService.ts` - Alert management

## 🎨 Design System

Theme configuration available in `src/styles/theme.ts`:

- Colors (primary, secondary, success, danger, warning)
- Spacing (xs to xxl)
- Typography (font sizes and weights)
- Shadows and elevations

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- Your Name - Initial work

## 📞 Contact

For questions or suggestions, please open an issue on GitHub.

---

**Note**: This is an active development project. All files currently contain comment-only templates describing what needs to be implemented. Start by implementing the authentication flow and basic UI components.
