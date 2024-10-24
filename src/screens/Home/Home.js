import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import HomeBanner from '../../components/HomeBanner';
import MovieCards from '../../components/MovieCards';
import useMoviesApi from '../../hooks/useMoviesApi';
import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
} from '../../api/Network';

const Home = () => {
  const [nowPlayingMovies] = useMoviesApi(getNowPlayingMovies);
  const [popularMovies] = useMoviesApi(getPopularMovies);
  const [topRatedMovies] = useMoviesApi(getTopRatedMovies);

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor={'transparent'} />
      <ScrollView style={styles.scrollView}>
        <HomeBanner />
        <View style={styles.subContainer}>
          <MovieCards title="Now Playing" data={nowPlayingMovies} />
          <MovieCards title="Popular" data={popularMovies} />
          <MovieCards title="Top Rated" data={topRatedMovies} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollView: {
    flex: 1,
  },
  subContainer: {
    paddingHorizontal: 15,
    gap: 10,
    marginTop: 20,
  },
});
