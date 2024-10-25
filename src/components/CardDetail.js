import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { memo } from 'react';
import { responsiveWidth } from 'react-native-responsive-dimensions';

const CardDetail = memo(({ movie, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        resizeMode="contain"
        style={styles.img}
        source={{
          uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}`,
        }}
      />
    </TouchableOpacity>
  );
});

export default CardDetail;

const styles = StyleSheet.create({
  img: {
    width: responsiveWidth(50),
    height: '100%',
    borderRadius: 15,
  },
});
