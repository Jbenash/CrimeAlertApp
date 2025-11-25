// Zone Service
// Handles all zone-related API calls
//
// TODO: Implement the following functions:
//
// getUserZones(token)
//   - GET request to /api/zones
//   - Return array of user's zones
//   - Include zone details (id, name, latitude, longitude, radius)
//
// createZone(token, zoneData: {name, latitude, longitude, radius})
//   - POST request to /api/zones
//   - Create new monitored zone
//   - Return created zone object
//
// updateZone(token, zoneId, updates)
//   - PUT request to /api/zones/:id
//   - Update zone details
//   - Return updated zone object
//
// deleteZone(token, zoneId)
//   - DELETE request to /api/zones/:id
//   - Remove zone from monitoring
//   - Return success status
//
// getZoneById(token, zoneId)
//   - GET request to /api/zones/:id
//   - Return single zone details
