// MovieDetailsScreen.js

import {
  ScrollView,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Text,
} from 'react-native';
import React, { useState } from 'react';
import MovieInfo from '../../components/MovieInfo';
import MoviePlayer from '../../components/MoviePlayer';
import LongButtons from '../../components/LongButtons';
// import * as ScreenOrientation from 'expo-screen-orientation';

const MovieDetailsScreen = ({ route }) => {
  const movieData = route.params.movieData;

  const [isVideoVisible, setIsVideoVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor={'transparent'} />
      <ScrollView style={styles.scrollContainer}>
        <MoviePlayer movieData={movieData} isVideoVisible={isVideoVisible} />
        <MovieInfo movieData={movieData} />
        <LongButtons onPlayButtonPress={() => setIsVideoVisible(true)} />
        <Text style={styles.overview}>{movieData.overview}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MovieDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    marginTop: StatusBar.currentHeight,
  },
  scrollContainer: {
    flex: 1,
  },
  overview: {
    color: 'white',
    fontSize: 15,
    marginVertical: 10,
    textAlign: 'justify',
    paddingHorizontal: 10,
  },
});
