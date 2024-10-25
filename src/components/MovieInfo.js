//MovieInfo.js

import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Fontisto, MaterialIcons } from '@expo/vector-icons';

const MovieInfo = ({ movieData }) => {
  const { title, release_date, vote_count } = movieData;

  const release_year = release_date.split('-')[0];

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Fontisto name="netflix" size={20} color="red" />
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

      <View style={styles.bottomContainer}>
        <Text style={{ color: 'white' }}>{release_year}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
          <MaterialIcons name="favorite" size={19} color="red" />
          <Text style={{ color: 'white' }}>{vote_count}</Text>
        </View>
        <MaterialIcons name="hd" size={24} color="white" />
      </View>
    </View>
  );
};

export default MovieInfo;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 10,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
