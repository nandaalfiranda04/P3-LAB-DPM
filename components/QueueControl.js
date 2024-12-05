import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

const QueueControl = ({ addQueue, removeQueue, clearQueue }) => {
  return (
    <View style={styles.buttonContainer}>
      <Button title="Tambah" onPress={addQueue} />
      <Button title="Hapus Antrian" onPress={removeQueue} />
      <Button title="Hapus Semua" onPress={clearQueue} />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
});

export default QueueControl;
