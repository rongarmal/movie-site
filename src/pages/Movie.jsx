import { useState, useEffect } from "react"; 

function Movie() {
  const [movieList, setMovieList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getMovie = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=d77e828f1a9522773ee30ab2a02d661c" 
      );
      if (!res.ok) throw new Error("Failed to fetch movies.");
      const json = await res.json();
      setMovieList(json.results || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  const filteredMovies = movieList.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    
    <div>
      <div className="flex items-center justify-between bg-slate-700 p-5">
        <h1 className="h-11 w-auto pt-2 font-bold text-white">Movieshub</h1>
        <ul className="flex gap-5 font-bold text-white text-sm pt-4">
        <h1 className={"hover:text-stone-600"}>Romance</h1>
        <h1 className={"hover:text-stone-600"}>Anime</h1> 
        <h1 className={"hover:text-stone-600"}>KDrama</h1>
          <input
            type="text"
            placeholder="Search Movies"
            className="rounded-3xl border text-black border-stone-950 px-4 py-2"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </ul>
      </div>


      <div className="pt-10 bg-[url('/images/bg.jpg')] min-h-screen grid grid-cols-2 md:grid-cols-5 gap-4">
        {loading ? (
          <div className="text-center text-white">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : filteredMovies.length === 0 ? (
          <div className="text-center text-white col-span-full">
            No movies found.
          </div>
        ) : (
          filteredMovies.map((movie) => (
            <div
              key={movie.id}
              className="text-center p-4 border rounded-3xl bg-stone-900 transform transition-transform duration-800 hover:scale-95"
            >
              <img
                className="rounded-lg mx-auto"
                style={{ width: "220px", height: "300px" }}
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : "/images/fallback.jpg" 
                }
                alt={movie.title || "Movie Poster"}
              />
              <h3 className="font-bold text-lg mt-2">{movie.title}</h3>
              <p className="text-sm">Release Date: {movie.release_date}</p>
              <p className="text-sm">Rating: {movie.vote_average}/10</p>
              <p className="text-sm">
                {movie.overview
                  ? `${movie.overview.substring(0, 20)}...`
                  : "No description available."}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Movie;
