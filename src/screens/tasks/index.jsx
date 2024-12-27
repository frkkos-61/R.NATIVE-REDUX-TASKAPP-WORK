import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import FloatActionButton from '../../component/ui/floatActionButton';
import {useSelector} from 'react-redux';
import TaskItem from '../../component/tasks/taskItem';
import {ADDTASK} from '../../utils/routes';

const Tasks = ({navigation}) => {
  const {tasks} = useSelector(state => state?.tasks);
  const [Task, setTask] = useState([]);
  return (
    <View style={defaultScreenStyle.container}>
      <FlatList
        ListEmptyComponent={
          <Text style={{textAlign: 'center', fontSize: 18}}>
            Henüz Görev/Task oluşturulmamıştır...
          </Text>
        }
        data={tasks}
        renderItem={({item}) => <TaskItem item={item} />}
      />
      <FloatActionButton onPress={() => navigation.navigate(ADDTASK)} />
    </View>
  );
};

export default Tasks;
