import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import MainScene from './scenes/MainScene';
import PlayerScene from './scenes/PlayerScene';

const App = () => (
    <Router>
        <Stack key="root">
            <Scene key="main" component={MainScene} title="Main" initial />
            <Scene key="player" component={PlayerScene} />
        </Stack>
    </Router>
)

export default App;