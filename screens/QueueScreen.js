import React, { useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import QueueControl from '../components/QueueControl';

const QueueScreen = () => {
  const [queue, setQueue] = useState([]);
  const [queueNumber, setQueueNumber] = useState(1);

  const addQueue = () => {
    setQueue([...queue, { id: queueNumber.toString(), number: queueNumber }]);
    setQueueNumber(queueNumber + 1);
  };

  const removeQueue = () => {
    if (queue.length === 0) {
      Alert.alert('Queue is Empty', 'No queues to remove.');
    } else {
      setQueue(queue.slice(1));
    }
  };

  const clearQueue = () => {
    setQueue([]);
    setQueueNumber(1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ANTRIAN MASUK SURGA</Text>
      <View style={styles.separator} /> {/* Garis pemisah */}
      <QueueControl addQueue={addQueue} removeQueue={removeQueue} clearQueue={clearQueue} />
      <View style={styles.separator} /> {/* Garis pemisah */}
      <Text style={styles.queueListTitle}>Daftar antrian:</Text>
      <FlatList
        data={queue}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.queueItemContainer}>
            <TouchableOpacity style={styles.queueItem}>
              <Text style={styles.queueText}>Hamba #{item.number}</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>Tidak Ada Yang Masuk Surga</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f2f5',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,  
    textAlign: 'center',
    color: '#333',
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 20, 
  },
  queueListTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#333',
  },
  queueItemContainer: {
    marginBottom: 10,
    alignItems: 'center',
  },
  queueItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: '80%',
    alignItems: 'center',
    elevation: 5,
    marginBottom: 10,
  },
  queueText: {
    fontSize: 16,
    color: '#333',
  },
  emptyText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#999',
    marginTop: 10,
  },
});

export default QueueScreen;
