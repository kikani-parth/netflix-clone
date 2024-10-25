// HomeBanner.js

import { FlatList, StyleSheet, View } from 'react-native';
import React, { useCallback } from 'react';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import MovieBanner from './MovieBanner';
import useMoviesApi from '../hooks/useMoviesApi';
import { getUpcomingMovies } from '../api/Network';
import { useNavigation } from '@react-navigation/native';

const HomeBanner = () => {
  const [upcomingMovies] = useMoviesApi(getUpcomingMovies);

  const navigation = useNavigation();

  const handleOnPress = (movieData) => {
    navigation.navigate('MovieDetailsScreen', { movieData, shouldPlay: true });
  };

  const renderMovieBanner = useCallback(({ item }) => {
    return <MovieBanner movie={item} onPress={() => handleOnPress(item)} />;
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={(movie) => movie.id}
        data={upcomingMovies}
        renderItem={renderMovieBanner}
      />
    </View>
  );
};

export default HomeBanner;

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(60),
    width: '100%',
  },
});
