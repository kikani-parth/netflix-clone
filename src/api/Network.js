// Network.js

import axios from 'axios';
import { TMDB_API_TOKEN } from '@env';

const tmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer ${TMDB_API_TOKEN}`,
  },
});

export const getUpcomingMovies = async () => {
  try {
    const response = await tmdb.get('/movie/upcoming');

    const { data, status } = response;

    return { success: true, data, status };
  } catch (error) {
    console.log(error);
    return { success: false, data: error };
  }
};

export const getNowPlayingMovies = async () => {
  try {
    const response = await tmdb.get('/movie/now_playing');

    const { data, status } = response;

    return { success: true, data, status };
  } catch (error) {
    console.log(error);
    return { success: false, data: error };
  }
};

export const getPopularMovies = async () => {
  try {
    const response = await tmdb.get('/movie/popular');

    const { data, status } = response;

    return { success: true, data, status };
  } catch (error) {
    console.log(error);
    return { success: false, data: error };
  }
};

export const getTopRatedMovies = async () => {
  try {
    const response = await tmdb.get('/movie/top_rated');

    const { data, status } = response;

    return { success: true, data, status };
  } catch (error) {
    console.log(error);
    return { success: false, data: error };
  }
};
