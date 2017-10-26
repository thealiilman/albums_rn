//We're going to import a library to create a Component.
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//Then, we create a Component.
const App = () => (
    <View style={{ flex: 1 }}>
        <Header headerText={'ALBUMS'} />
        <AlbumList />
    </View>
);


//Render it to the device.
AppRegistry.registerComponent('albums', () => App);
