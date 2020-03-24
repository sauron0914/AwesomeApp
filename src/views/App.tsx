/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import HomeDashboard from './Home/Dashboard/Dashboard';
import HomeList from './Home/List/List';

const App: React.FC = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="dashboard" component={HomeDashboard} />
                <Scene key="home-list" component={HomeList} />
            </Scene>
        </Router>
    );
};

export default App;
