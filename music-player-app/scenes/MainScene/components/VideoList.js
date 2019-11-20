import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Videos } from '../../../assets/videos/Videos';

class VideoList extends Component {
    state = {}

    render() {
        return (
            <View>
                <FlatList
                    data={Videos}
                    renderItem={({item}) => (
                        <Text 
                            style={styles.item}
                            onPress={() => Actions.player({
                                title: item.title, video: item.video
                            })}
                        >
                            {item.title}
                        </Text>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        textAlign: 'center'
    },
})

export default VideoList;