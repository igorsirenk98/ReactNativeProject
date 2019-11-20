import React, { Component } from 'react';
import { View } from 'react-native';
import { Video } from 'expo';
import Navigation from '../components/Navigation';

class PlayerScene extends Component {
    state = {
        title: this.props.title,
        video: this.props.video
    }

    componentDidMount() {
        this.props.navigation.setParams({
            title: this.state.title,
       });
    }

    render() {
        return (
            <View>
                <Video source={this.state.video}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    resizeMode="cover"
                    shouldPlay
                    isLooping
                    onBuffer={this.onBuffer}                // Callback when remote video is buffering
                    onError={this.videoError}               // Callback when video cannot be loaded
                    style={{ width: 350, height: 350, marginTop: 30, marginRight: 'auto', marginBottom: 0, marginLeft: 'auto', }} 
                />
                <Navigation />
            </View>
        )
    }
}

export default PlayerScene;