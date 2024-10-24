import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const MovieCards = ({ title, data }) => {
  const renderMovieCards = ({ item }) => {
    return (
      <Image
        resizeMode="contain"
        style={styles.img}
        source={{
          uri: `https://image.tmdb.org/t/p/original/${item.poster_path}`,
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={renderMovieCards}
        ItemSeparatorComponent={() => <View style={{ width: 15 }}></View>}
      />
    </View>
  );
};

export default MovieCards;

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(40),
    gap: 15,
    marginTop: 10,
  },
  title: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: 0.8,
    marginLeft: 10,
  },
  img: {
    width: responsiveWidth(50),
    height: '100%',
    borderRadius: 15,
  },
});
