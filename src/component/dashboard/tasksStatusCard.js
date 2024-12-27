import {MoreCircle} from 'iconsax-react-native';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import ThemeColors from '../../theme/colors';

const TasksStatusCard = ({item, value}) => {
  return (
    <View style={[styles.container, {backgroundColor: item.color}]}>
      <View>
        <Text style={styles.txt}> {value} </Text>
        <Text style={styles.status}> {item.status} </Text>
      </View>
      <View>
        <Pressable>
          <MoreCircle size="32" color={ThemeColors.white} variant="Bold" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 5,
    width: '47%',
    height: 170,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txt: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 25,
  },
  status: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16,
    marginTop: 10,
  },
});

export default TasksStatusCard;
