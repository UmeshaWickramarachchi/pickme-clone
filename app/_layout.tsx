import { Stack } from "expo-router";
import { Tabs } from 'expo-router'

export default function RootLayout() {
  return (


    <Stack
    // screenOptions={{
    //   headerStyle: {
    //     backgroundColor: '#f4511e',
    //   },
    //   headerTintColor: '#fff',
    //   headerTitleStyle: {
    //     fontWeight: 'bold',
    //   },
    // }}
    >
      {/* <Stack.Screen name="index" options={{
        headerTitle: '',
        headerShown: false
      }} /> */}

      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

    </Stack>


  );
}
