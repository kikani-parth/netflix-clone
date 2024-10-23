import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import HomeBanner from '../../components/HomeBanner';

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor={'transparent'} />
      <ScrollView style={styles.scrollView}>
        <HomeBanner />
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
});
