import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

import Todo from './components/Todo/Todo';

export default function App() {
  return (
    <View style={styles.container}>
      <Todo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
