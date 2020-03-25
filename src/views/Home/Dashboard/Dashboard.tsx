import React from 'react';
import {View, Text, Button} from 'react-native';
import {Actions} from 'react-native-router-flux';

const HomeDashboard: React.FC = () => {
  return (
    <View>
      <Text> HomeDashboard</Text>
      <Button
        onPress={() => {
          Actions.push('home-list');
        }}
        title="点我！"
      />
    </View>
  );
};

export default HomeDashboard;
