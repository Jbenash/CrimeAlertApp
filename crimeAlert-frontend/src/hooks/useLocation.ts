// useLocation Hook
// Custom hook for location tracking and permissions
//
// TODO: Implement the following:
//
// State:
//   - location: {latitude, longitude} | null
//   - error: string | null
//   - loading: boolean
//
// Methods:
//   - requestPermission() - Request location permissions
//   - getCurrentLocation() - Get current GPS coordinates
//   - watchLocation() - Start continuous location tracking
//   - stopWatching() - Stop location tracking
//
// Features:
//   - Use expo-location library
//   - Handle permission denied gracefully
//   - Auto-request permissions on mount
//   - Return location updates in real-time
//   - Handle location errors (GPS disabled, timeout, etc.)
