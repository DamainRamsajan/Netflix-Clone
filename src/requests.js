const APIKEY = "a45edfc31e730798f3230ac2f7f6b961";

const requests ={
    fetchTrending: `/trending/all//week?api_keys=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discovery/tv?api_keys=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_keys=${API_KEY}&language=en-US1`,
    fetchActionMovies: `/discover/movie?api_keys=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_keys=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_keys=${API_KEY}&with_genres=27`,
    fetchRomanticMovies: `/discover/movie?api_keys=${API_KEY}&with_genres=10749`
    fetchDocumentaries: `/discover/movie?api_keys=${API_KEY}&with_genres=99`
}

export default requests;