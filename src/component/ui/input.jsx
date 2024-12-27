import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import ThemeColors from '../../theme/colors';

const Input = props => {
  const {title} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput {...props} style={styles.input} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  title: {
    fontWeight: 'bold',
    color: ThemeColors.black,
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    padding: 10,
    backgroundColor: ThemeColors.gray,
    fontSize: 16,
    borderRadius: 5,
    paddingVertical: 15,
  },
});
