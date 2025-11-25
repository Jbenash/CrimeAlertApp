// Authentication Service
// Handles all authentication-related API calls
//
// TODO: Implement the following functions:
//
// login(credentials: {email, password})
//   - POST request to /api/auth/login
//   - Return user data and authentication token
//   - Handle network errors
//
// register(data: {name, email, password})
//   - POST request to /api/auth/register
//   - Return user data and authentication token
//   - Validate email format before sending
//
// logout(token)
//   - POST request to /api/auth/logout
//   - Clear authentication token
//   - Handle cleanup
//
// refreshToken(token)
//   - POST request to /api/auth/refresh
//   - Get new authentication token
//
// forgotPassword(email)
//   - POST request to /api/auth/forgot-password
//   - Send password reset email
