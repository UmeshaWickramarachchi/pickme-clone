import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Foundation } from '@expo/vector-icons';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FFC60B', // Set your desired active tint color here
        tabBarInactiveTintColor: '#000000', // Optionally set inactive tint color
      }}>

      <Tabs.Screen
        name="index"
        options={{

          // headerTitle: props => <LibraryHeader {...props} />,
          // headerStyle:{backgroundColor:'black'},
          title: 'Home',
          tabBarIcon: ({ color }) => <Foundation size={28} name="home" color={color} />,

          headerShown: false
        }}
      />
      <Tabs.Screen
        name="activities"
        options={{
          // headerTitle: props => <LibraryHeader {...props} />,
          // headerStyle:{backgroundColor:'black'},
          title: 'Activity',
          tabBarIcon: ({ color }) => <Foundation size={28} name="list" color={color} />,
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          // headerTitle: props => <LibraryHeader {...props} />,
          // headerStyle:{backgroundColor:'black'},
          title: 'Notification',
          tabBarIcon: ({ color }) => <MaterialIcons name="notifications-none" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          // headerTitle: props => <LibraryHeader {...props} />,
          // headerStyle:{backgroundColor:'black'},
          title: 'Profile',

          tabBarIcon: ({ color }) => <EvilIcons name="user" size={30} color={color} />,


        }}
      />
    </Tabs>
  );
}