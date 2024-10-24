import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { getUpcomingMovies } from '../api/Network';

const useUpcomingMoviesApi = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  const handleUpcomingMoviesApi = async () => {
    const { data, status } = await getUpcomingMovies();

    if (status === 200) {
      // setUpcomingMovies(data.Search); // for omdb
      setUpcomingMovies(data.results); // for tmdb
    } else {
      Alert.alert(`Req failed with ${data}`);
    }
  };

  useEffect(() => {
    handleUpcomingMoviesApi();
  }, []);

  return [upcomingMovies];
};

export default useUpcomingMoviesApi;
