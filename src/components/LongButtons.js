import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import { Octicons, Entypo } from '@expo/vector-icons';

const LongButtons = ({ onPlayButtonPress }) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        onPress={onPlayButtonPress}
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
        <Text style={[styles.buttonText, { color: 'white' }]}>Download</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    gap: 10,
    marginTop: 10,
    marginBottom: 5,
    marginHorizontal: 10,
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
});

export default LongButtons;
