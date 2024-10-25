import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
// import Video from 'react-native-video';
import { Video, ResizeMode } from 'expo-av';
// import * as ScreenOrientation from 'expo-screen-orientation';

import { Fontisto, MaterialIcons, Octicons, Entypo } from '@expo/vector-icons';

const MovieDetailsScreen = ({ route }) => {
  const {
    title,
    release_date,
    poster_path,
    overview,
    backdrop_path,
    vote_count,
  } = route.params.movieData;

  const release_year = release_date.split('-')[0];

  const [isVideoVisible, setIsVideoVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor={'transparent'} />
      <ScrollView style={styles.scrollContainer}>
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

        <View style={styles.infoContainer}>
          <View style={styles.nSeriesContainer}>
            <Fontisto name="netflix" size={22} color="red" />
            <Text
              style={{
                color: 'white',
                letterSpacing: 4.5,
                fontSize: 15,
              }}
            >
              SERIES
            </Text>
          </View>

          <Text style={styles.title}>{title}</Text>

          <View style={styles.lastContainer}>
            <Text style={{ color: 'white' }}>{release_year}</Text>
            <View
              style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}
            >
              <MaterialIcons name="favorite" size={19} color="red" />
              <Text style={{ color: 'white' }}>{vote_count}</Text>
            </View>
            <MaterialIcons name="hd" size={24} color="white" />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => setIsVideoVisible(true)}
              activeOpacity={0.8}
              style={styles.button}
            >
              <Entypo name="controller-play" size={24} color="black" />
              <Text style={styles.buttonText}>Play</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              style={[styles.button, { backgroundColor: '#2B292B' }]}
            >
              <Octicons
                name="download"
                size={22}
                color="white"
                style={{ marginRight: 5 }}
              />
              <Text style={[styles.buttonText, { color: 'white' }]}>
                Download
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.overview}>{overview}</Text>
        </View>
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
  videoPlayerContainer: {
    height: responsiveHeight(35),
  },
  infoContainer: {
    padding: 10,
    gap: 10,
  },
  nSeriesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  lastContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  buttonContainer: {
    // padding: 10,
    gap: 10,
    marginTop: 10,
  },
  button: {
    backgroundColor: 'white',
    height: responsiveHeight(5.3),
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  buttonText: {
    fontSize: responsiveFontSize(2),
    color: 'black',
    fontWeight: '700',
  },
  overview: {
    color: 'white',
    fontSize: 15,
    marginVertical: 10,
    // lineHeight: 20,
    textAlign: 'justify',
    // letterSpacing: 0.3,
  },
});
