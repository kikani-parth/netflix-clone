import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const MovieDetailsScreen = ({ route }) => {
  const {
    title,
    release_date,
    poster_path,
    overview,
    backdrop_path,
    vote_count,
  } = route.params.movieData;

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor={'transparent'} />
      <Text style={{ color: 'white' }}>MovieDetailsScreen</Text>
    </View>
  );
};

export default MovieDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    marginTop: StatusBar.currentHeight,
  },
});
