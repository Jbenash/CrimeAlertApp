// Geofencing Utilities
// Helper functions for geofence calculations
//
// TODO: Implement the following functions:
//
// calculateDistance(lat1, lon1, lat2, lon2)
//   - Use Haversine formula to calculate distance between two coordinates
//   - Return distance in meters
//   - Account for Earth's curvature
//
// isPointInsideGeofence(pointLat, pointLon, centerLat, centerLon, radius)
//   - Check if a point is within a circular geofence
//   - Return boolean
//   - Use calculateDistance to determine
//
// didEnterGeofence(previousLocation, currentLocation, geofenceCenter, radius)
//   - Detect when user enters a geofence
//   - Compare previous and current positions
//   - Return true only on transition from outside to inside
//
// didExitGeofence(previousLocation, currentLocation, geofenceCenter, radius)
//   - Detect when user exits a geofence
//   - Compare previous and current positions
//   - Return true only on transition from inside to outside
//
// getClosestZone(currentLocation, zones)
//   - Find which zone is closest to current location
//   - Return zone object or null
