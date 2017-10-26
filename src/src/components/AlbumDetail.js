//Imports
import React, { Component } from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection.js';
import Button from './Button';

//Component
const AlbumDetail = ({ album }) => {
    //this will only take the album object from the props. A way called "destructuring".
    const { title, artist, thumbnail_image, image, url } = album;
    const { artistAlbumDetail, albumTitleStyle, thumbnailContainerStyle, thumbnailStyle, imageStyle } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
                </View>

                <View style={artistAlbumDetail}>
                    <Text style={albumTitleStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image style={imageStyle} source={{ uri: image }} resizeMode={'stretch'} />
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    artistAlbumDetail: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    albumTitleStyle: {
        color: '#333',
        fontSize: 18,
        fontWeight: 'bold'
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

//Export
export default AlbumDetail;
