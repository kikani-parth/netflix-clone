//MoviePlayer.js

import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { Video, ResizeMode } from 'expo-av';
import { responsiveHeight } from 'react-native-responsive-dimensions';

const MoviePlayer = ({ movieData, isVideoVisible }) => {
  const { backdrop_path } = movieData;
  return (
    <View>
      {isVideoVisible ? (
        <Video
          style={styles.videoPlayerContainer}
          source={{
            uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
          }}
          shouldPlay
          resizeMode={ResizeMode.CONTAIN}
          isMuted={false}
          useNativeControls
        />
      ) : (
        <Image
          style={styles.videoPlayerContainer}
          source={{
            uri: `https://image.tmdb.org/t/p/original/${backdrop_path}`,
          }}
        />
      )}
    </View>
  );
};

export default MoviePlayer;

const styles = StyleSheet.create({
  videoPlayerContainer: {
    height: responsiveHeight(35),
  },
});
