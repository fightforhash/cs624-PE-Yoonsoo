import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { DarkTheme, DefaultTheme } from '@react-navigation/native'; 

const App = () => {
  const colorScheme = 'dark'; 

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}> {}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> {}
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
};

export default App;
