import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ThemeColors from '../../theme/colors';
import {Calendar1, Edit, More, Trash} from 'iconsax-react-native';
import {setColor} from '../../utils/func';
import {useDispatch} from 'react-redux';
import {deleteTask} from '../../store/acitons/taskActions';
import {useNavigation} from '@react-navigation/native';
import {UPDATETASK} from '../../utils/routes';

const TaskItem = ({item}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const deleteItem = () => {
    Alert.alert('Uyarı', 'Silme işlemi için emin misiniz ?', [
      {
        text: 'Sil',
        onPress: () => dispatch(deleteTask(item.id)),
      },
      {
        text: 'Vazgeç',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
    ]);
  };
  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'space-around'}}>
        <View>
          <Text style={{fontWeight: 'bold', color: 'black'}}>{item.title}</Text>
        </View>
        <View>
          <View
            style={{
              backgroundColor: setColor(item.status),
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
              paddingVertical: 8,
              borderRadius: 100,
            }}>
            <Text style={{fontWeight: 'bold', color: 'black'}}>
              {item.status}
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', gap: 8, alignItems: 'center'}}>
          <Calendar1 size="20" color="black" variant="Outline" />
          <Text style={{fontWeight: 'bold', color: 'black'}}>{item.date}</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={{marginHorizontal: 10}}>
          <Trash
            onPress={deleteItem}
            size="24"
            color="black"
            variant="Outline"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(UPDATETASK, {task: item})}>
          <Edit size="24" color="black" variant="Outline" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.7,
    borderRadius: 8,
    borderColor: ThemeColors.black,
    marginVertical: 5,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 150,
  },
});
