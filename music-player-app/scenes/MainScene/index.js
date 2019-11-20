import React from 'react';
import { View } from 'react-native';
import VideoList from './components/VideoList';
import Navigation from '../components/Navigation';

const MainScene = () => (
    <View>
        <VideoList />
        <Navigation />
    </View>
)

export default MainScene;