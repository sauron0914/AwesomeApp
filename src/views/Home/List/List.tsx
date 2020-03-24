import React from 'react';
import {View, Text, Button} from 'react-native';
import {Actions} from 'react-native-router-flux';

const HomeList: React.FC = () => {
    return (
        <View>
            <Text>HomeList</Text>
            <Button
                onPress={() => {
                    Actions.pop();
                }}
                title="回退"
            />
        </View>
    );
};

export default HomeList;
