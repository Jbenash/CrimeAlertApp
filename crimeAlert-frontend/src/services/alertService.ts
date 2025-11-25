// Alert Service
// Handles all alert-related API calls
//
// TODO: Implement the following functions:
//
// getAlerts(token)
//   - GET request to /api/alerts
//   - Return array of all alerts
//   - Include alert details (id, type, message, location, timestamp, severity)
//
// getAlertsByZone(token, zoneId)
//   - GET request to /api/alerts/zone/:id
//   - Return alerts specific to a zone
//   - Filter by zone boundaries
//
// reportAlert(token, alertData: {type, message, latitude, longitude, severity})
//   - POST request to /api/alerts
//   - Create new alert report
//   - Return created alert object
//
// getAlertById(token, alertId)
//   - GET request to /api/alerts/:id
//   - Return single alert details
//
// markAlertAsRead(token, alertId)
//   - PUT request to /api/alerts/:id/read
//   - Mark alert as viewed by user
