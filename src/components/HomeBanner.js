// HomeBanner.js

import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { getUpcomingMovies } from '../api/Network';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const HomeBanner = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    const handleUpcomingMoviesApi = async () => {
      console.log('req started');

      const { data, status } = await getUpcomingMovies();
      console.log('req completed');

      if (status === 200) {
        console.log('success');
        setUpcomingMovies(data.Search); // for omdb
        //        setUpcomingMovies(data.results);      // for tmdb
      } else {
        console.log('fail');
        Alert.alert(`Req failed with ${data}`);
      }
    };

    handleUpcomingMoviesApi();
  }, []);

  const renderMovieBanner = ({ item }) => {
    //source={{uri:`https://image.tmdb.org/t/p/w500/${item.poster_path}`}} // for tmdb

    return (
      <ImageBackground
        style={styles.movieBanner}
        resizeMode="cover"
        source={{ uri: item.Poster }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={(item) => item.imdbID}
        data={upcomingMovies}
        renderItem={renderMovieBanner}
      />
    </View>
  );
};

export default HomeBanner;

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(70),
    width: '100%',
  },
  movieBanner: {
    width: responsiveWidth(100),
    height: '100%',
  },
});
