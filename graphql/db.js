let movies = [
  {
    id: 0,
    name: "movie1",
    score: 1
  },
  {
    id: 1,
    name: "movie2",
    score: 8
  },
  {
    id: 2,
    name: "movie3",
    score: 99
  },
  {
    id: 3,
    name: "movie4",
    score: 2
  }
];

export const getMovies = () => movies;

export const getById = id => {
  const filteredMovie = movies.filter(movie => movie.id === String(id));
  return filteredMovie[0];
};

export const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== String(id));
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score
  };
  movies.push(newMovie);
  return newMovie;
};
