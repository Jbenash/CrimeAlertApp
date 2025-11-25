import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

export default function RootLayout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="login" />
        <Stack.Screen name="register" />
        <Stack.Screen name="add-zone" />
        <Stack.Screen name="zones" />
        <Stack.Screen name="alerts" />
        <Stack.Screen name="settings" />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
