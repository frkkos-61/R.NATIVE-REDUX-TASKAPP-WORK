import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import Button from '../../component/ui/button';
import Input from '../../component/ui/input';
import {addNewTask, updateTask} from '../../store/acitons/taskActions';
import {useDispatch} from 'react-redux';

const UpdateTask = ({route}) => {
  const task = route.params.task;
  const [title, setTitle] = useState(task.title);
  const [date, setDate] = useState(task.date);
  const [status, setStatus] = useState(task.status);
  const dispatch = useDispatch();
  const saveTask = () => {
    const form = {
      id: task.id,
      title: title,
      status: status,
      date: date,
    };
    dispatch(updateTask(form));
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
      <Button onPress={() => saveTask()} title="GÜNCELLE" status="warning" />
    </View>
  );
};

export default UpdateTask;
