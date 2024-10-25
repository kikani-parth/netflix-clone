import { useState, useEffect } from 'react';
import { Alert } from 'react-native';

const useMoviesApi = (apiCallback, args = []) => {
  const [movies, setMovies] = useState([]);

  const handleMoviesApi = async () => {
    const { data, status } = await apiCallback(...args);
    console.log('req completed');

    if (status === 200) {
      setMovies(data.results); // for tmdb
    } else {
      Alert.alert(`Req failed with ${data}`);
    }
  };

  useEffect(() => {
    handleMoviesApi();
  }, [apiCallback, ...args]);

  return [movies];
};

export default useMoviesApi;
