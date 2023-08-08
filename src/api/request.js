const requests = {
  fetchNowPlaying:"movie/now_playing",
  fetchTrending: "/trending/all/week",
  fetchTopRated: "/movie/top_rated",
  fetchActionMoives: "/discover/movie?with_genres=28",
  fetchComedyMoives: "/discover/movie?with_genres=35",
  fetchHorrorMoives: "/discover/movie?with_genres=27",
  fetchRomanceMoives: "/discover/movie?with_genres=10749",
  fetchDocumentaries: "/discover/movie?with_genres=99",

} //https://developer.themoviedb.org/docs/getting-started

export default  requests