// Network.js

import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWI4YjczNmQ3NjdkNWE2MzExZTM4Yzk1ZmQ1MzJkZCIsIm5iZiI6MTcyOTY4MDAyMC40NDQ0MjUsInN1YiI6IjY3MThhNTA0ZTgzM2Q5MmVmMDVmYWI3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xPdynryswhH8dwHdlqTZiPpZiTjCMMH9IS_Wr0q00YM',
  },
});

export const getUpcomingMovies = async () => {
  try {
    const response = await axios.get(
      'http://www.omdbapi.com/?apikey=1f59831c&s=avengers'
    );

    const { data, status } = response;

    return { success: true, data, status };
  } catch (error) {
    console.log(error);
    return { success: false, data: error };
  }
};

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/upcoming',
  params: { language: 'en-US', page: '1' },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWI4YjczNmQ3NjdkNWE2MzExZTM4Yzk1ZmQ1MzJkZCIsIm5iZiI6MTcyOTY4NDE0Ni4wNjQ5NSwic3ViIjoiNjcxOGE1MDRlODMzZDkyZWYwNWZhYjcyIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.EpxN1h42rN44W8S3t-0IgXnJPriI8f_mY0u5DaS7uko',
  },
};

// export const getUpcomingMovies = async () => {
//   axios
//     .request(options)
//     .then((res) => console.log(res.data))
//     .catch((err) => console.error(err));
// };

const config = {
  baseURL: 'https://api.themoviedb.org/3/movie',
  token:
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWI4YjczNmQ3NjdkNWE2MzExZTM4Yzk1ZmQ1MzJkZCIsIm5iZiI6MTcyOTY4NDE0Ni4wNjQ5NSwic3ViIjoiNjcxOGE1MDRlODMzZDkyZWYwNWZhYjcyIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.EpxN1h42rN44W8S3t-0IgXnJPriI8f_mY0u5DaS7uko',
};

// export const getUpcomingMovies = async () => {
//   try {
//     const response = await axios.get(`${config.baseURL}/upcoming`, {
//       headers: {
//         Authorization: `Bearer ${config.token}`,
//       },
//     });

//     const { data, status } = response;

//     return { success: true, data, status };
//   } catch (error) {
//     console.log(error);
//     return { success: false, data: error };
//   }
// };
