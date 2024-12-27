import {ScrollView, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import SectionTitle from '../../component/ui/sectionTitle';
import TasksStatusCard from '../../component/dashboard/tasksStatusCard';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {VictoryLabel, VictoryPie, VictoryTheme} from 'victory-native';
import {statusTypes} from '../../utils/constants';

const Dashboard = () => {
  const {taskStatus, tasks} = useSelector(state => state?.tasks);
  const countTaskStatus = status => {
    return tasks.filter(item => item?.status === status).length;
  };
  const calculateTaskStatus = status => {
    const totalTask = tasks.length;
    const taskCount = tasks.filter(item => item?.status === status).length;
    const percenTage = ((totalTask / taskCount) * 100).toFixed(2);
    console.log(status, percenTage);
    return percenTage;
  };

  return (
    <View style={defaultScreenStyle.container}>
      <ScrollView>
        <SectionTitle title={'Project Summary'} />
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
          {taskStatus.map(item => (
            <TasksStatusCard
              value={countTaskStatus(item.status)}
              item={item}
              key={item.id}
            />
          ))}
        </View>
        <SectionTitle title={'Project Statistics'} />

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <VictoryPie
            width={350}
            height={350}
            padAngle={1}
            data={[
              {x: 'In Review', y: calculateTaskStatus(statusTypes.INREVIEW)},
              {
                x: 'In Progress',
                y: calculateTaskStatus(statusTypes.INPROGRESS),
              },
              {x: 'On Hold', y: calculateTaskStatus(statusTypes.COMPLATED)},
              {x: 'Complated', y: calculateTaskStatus(statusTypes.ONHOLD)},
            ]}
            theme={VictoryTheme.clean}
            labelComponent={
              <VictoryLabel
                style={{fontWeight: 'bold', fontSize: 14, fill: 'red'}}
              />
            }
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {},
});
