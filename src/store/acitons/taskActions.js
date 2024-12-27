import {Alert} from 'react-native';
import {ADDTASK, DELETETASK, UPDATETASK} from '../types/tasksTypes';

export const addNewTask = task => {
  return async dispatch => {
    dispatch({
      type: ADDTASK,
      payload: task,
    });
    Alert.alert('İşlem Başarılı', 'Kayıt Gerçekleşti');
  };
};

export const deleteTask = taskId => {
  return async dispatch => {
    dispatch({
      type: DELETETASK,
      payload: taskId,
    });
    Alert.alert('İşlem Başarılı', 'Silme Gerçekleşti');
  };
};

export const updateTask = task => {
  return async dispatch => {
    dispatch({
      type: UPDATETASK,
      payload: task,
    });
    Alert.alert('İşlem Başarılı', 'Güncelleme Tamamlandı');
  };
};
