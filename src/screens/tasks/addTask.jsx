import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import Button from '../../component/ui/button';
import Input from '../../component/ui/input';
import {addNewTask} from '../../store/acitons/taskActions';
import {statusTypes} from '../../utils/constants';
import {useDispatch} from 'react-redux';

const AddTask = () => {
  const [id, setId] = useState(0);
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [status, setStatus] = useState();
  const dispatch = useDispatch();
  const saveTask = () => {
    const task = {
      id: Date.now(),
      title: title,
      status: status,
      date: date,
    };

    dispatch(addNewTask(task));
  };

  return (
    <View style={defaultScreenStyle.container}>
      <Input
        onChangeText={value => setTitle(value)}
        value={title}
        placeholder="Please Set Title"
        title="Task Title"
      />
      <Input
        onChangeText={value => setDate(value)}
        value={date}
        placeholder="Please Set Date"
        title="Task Date"
      />
      <Input
        onChangeText={value => setStatus(value)}
        value={status}
        placeholder="Please Set Status"
        title="Task Status"
      />
      <Button onPress={() => saveTask()} title="KAYDET" status="success" />
    </View>
  );
};

export default AddTask;
