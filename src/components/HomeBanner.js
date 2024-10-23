// HomeBanner.js

import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { getUpcomingMovies } from '../api/Network';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';

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
      >
        <LinearGradient
          style={styles.linearContainer}
          colors={['rgba(0,0,0,0)', 'rgba(0,0,0,7)']}
        >
          <TouchableOpacity>
            <Text style={styles.titles}>My List</Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.8} style={styles.playButton}>
            <Entypo name="controller-play" size={24} color="black" />
            <Text style={styles.playButtonText}>Play</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.titles}>Info</Text>
          </TouchableOpacity>
        </LinearGradient>
      </ImageBackground>
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
    justifyContent: 'flex-end',
    opacity: 0.9,
  },
  linearContainer: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  titles: {
    fontSize: responsiveFontSize(2.3),
    color: 'white',
    fontWeight: '500',
  },
  playButton: {
    backgroundColor: 'white',
    width: responsiveWidth(25),
    height: responsiveHeight(5),
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  playButtonText: {
    fontSize: responsiveFontSize(2.2),
    color: 'black',
    fontWeight: '700',
  },
});
