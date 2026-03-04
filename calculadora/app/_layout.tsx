import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Calculadora() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.display, { backgroundColor: 'black' }]}>
        <Text style={{ color: 'red', fontSize: 50 }}>0</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  display: {
    width: '80%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 20,
  },
});