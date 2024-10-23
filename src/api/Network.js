import axios from 'axios';

const config = {
  baseUrl: 'https://api.themoviedb.org/3/movie',
  token:
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMWQ4MzA3YzBmOTc3MmMyMTg0NGYzN2FhM2M4NjIwOCIsIm5iZiI6MTcyOTY2ODY1Mi4yNjI3NTYsInN1YiI6IjY3MThhNTA0ZTgzM2Q5MmVmMDVmYWI3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Cuo0dxq08ZBIstX0SvlAIIF6P98acHIE7Ew6-Rplz3U',
};

export const getUpcomingMovies = async () => {
  try {
    const response = await axios.get(`${config.baseUrl}/upcoming`, {
      headers: {
        Authorization: `Bearer ${config.token}`,
      },
    });

    const { data, status } = response;

    return { success: true, data, status };
  } catch (error) {
    console.log(error);
    return { success: false, data: error };
  }
};
