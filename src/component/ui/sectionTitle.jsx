import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SectionTitle = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> {title} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default SectionTitle;
