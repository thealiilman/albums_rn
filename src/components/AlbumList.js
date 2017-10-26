//Imports
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

//Component
class AlbumList extends Component {
    state = { albums: [] }; //initializing, no need for 'this'.

    componentWillMount() {
        //https://rallycoding.herokuapp.com/api/music_albums
        fetch('http://ali-ilman.com/music_api/music.json')
            .then(response => response.json())
            .then(responseData => this.setState({ albums: responseData }));
    }

    renderAlbums() {
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} album={album} />
        );
    }

    render() {
        console.log(this.state);
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

//Export
export default AlbumList;
