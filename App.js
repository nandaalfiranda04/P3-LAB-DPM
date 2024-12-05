import { StatusBar } from 'expo-status-bar';
import React from 'react';
import QueueScreen from './screens/QueueScreen';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <QueueScreen />
    </>
  );
}
