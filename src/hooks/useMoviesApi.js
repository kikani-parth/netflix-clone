import { useState, useEffect } from 'react';
import { Alert } from 'react-native';

const useMoviesApi = (apiCallback) => {
  const [movies, setMovies] = useState([]);

  const handleMoviesApi = async () => {
    const { data, status } = await apiCallback();

    if (status === 200) {
      // setUpcomingMovies(data.Search); // for omdb
      setMovies(data.results); // for tmdb
    } else {
      Alert.alert(`Req failed with ${data}`);
    }
  };

  useEffect(() => {
    handleMoviesApi();
  }, []);

  return [movies];
};

export default useMoviesApi;
