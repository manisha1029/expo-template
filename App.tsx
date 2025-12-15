import { Provider } from 'react-redux';
import { useEffect } from 'react';

import { store } from './src/store/store';
import AppNavigator from './src/navigation/AppNavigator';
import { registerForPushNotificationsAsync } from './src/services/pushNotification/pushNotification';

export default function App() {

  // Register for push notifications on app mount.
  useEffect(() => {
    console.log('App mounted');
    registerForPushNotificationsAsync().then((token) => {
      if (token) {
        console.log('Push notification token:', token);
      } else {
        console.log('No push notification token received');
      }
    }).catch((error) => {
      console.error('Error registering for push notifications:', error);
    });
  }, []);
  
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}


