// MovieCards.js

import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useCallback } from 'react';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
import CardDetail from './CardDetail';

const MovieCards = ({ title, data }) => {
  const navigation = useNavigation();

  const handleOnPress = (movieData) => {
    navigation.navigate('MovieDetailsScreen', { movieData });
  };

  const renderMovieCards = useCallback(({ item }) => {
    return <CardDetail movie={item} onPress={() => handleOnPress(item)} />;
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        keyExtractor={(movie) => movie.id}
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
});
