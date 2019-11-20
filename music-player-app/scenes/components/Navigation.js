import React from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';

const Navigation = () => (
    <FlatList
        contentContainerStyle={styles.container}
        data={[
            {key: '1'},
            {key: '2'},
            {key: '3'},
            {key: '4'}
        ]}
        renderItem={({item}) => <View style={styles.item}><Text>{item.key}</Text></View>}
        horizontal
    />
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 22
    },
    item: {
        fontSize: 18,
        width: 50
    },
})

export default Navigation;