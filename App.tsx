import React, { useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import * as Notifications from 'expo-notifications';
import Routes from './src/routes';
import {
  useFonts,
  PlayfairDisplay_700Bold,
  PlayfairDisplay_400Regular,
} from '@expo-google-fonts/playfair-display';
import { Quicksand_400Regular, Quicksand_500Medium } from '@expo-google-fonts/quicksand';

import { PlantProps } from './src/libs/storage';

export default function App() {
  const [fontsLoaded] = useFonts({
    PlayfairDisplay_400Regular,
    PlayfairDisplay_700Bold,
    Quicksand_500Medium,
    Quicksand_400Regular,
  });

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(async (notification) => {
      const data = notification.request.content.data.plant as PlantProps;

      console.log(data);
    });

    return () => subscription.remove();

    //   async function notifications() {
    //     const data = await Notifications.getAllScheduledNotificationsAsync();
    //     console.log(data);
    //   }

    //   notifications();
  }, []);

  if (!fontsLoaded) return <AppLoading />;

  return <Routes />;
}
