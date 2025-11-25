// User Context
// Global state management for user authentication
//
// TODO: Implement the following:
//
// Context State:
//   - user: {id, name, email} | null
//   - token: string | null
//   - isAuthenticated: boolean
//
// Context Methods:
//   - login(user, token) - Save user and token to state and AsyncStorage
//   - logout() - Clear user and token from state and AsyncStorage
//   - updateUser(userData) - Update user information
//
// Provider:
//   - Wrap app with UserProvider
//   - Load user/token from AsyncStorage on app start
//   - Provide context to all child components
//
// Hook:
//   - useUser() - Custom hook to access user context
//   - Throw error if used outside UserProvider
