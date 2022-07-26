import React from "react"
import Movie from "./Movie"

function SearchMovies() {
  const [query, setQuery] = React.useState("")
  const [movies, setMovies] = React.useState([])

  function searchMovies(event) {
    event.preventDefault()
    try {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=ko-Kr&query=${query}`
      )
        .then(res => res.json())
        .then(data => {
          console.log(data.results)
          setMovies(data.results)
        })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="query">
          영화 제목
        </label>
        <input
          className="input"
          id="query"
          placeholder="예) 범죄와의 전쟁"
          type="text"
          name="query"
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <div className="card-list">
        {movies.map(movie => {
          return (
            <Movie
              props={movie}
              // title={movie.title}
              // release_date={movie.release_date}
              // vote_average={movie.vote_average}
              // key={movie.id}
              // poster_path={movie.poster_path}
            />
          )
        })}
      </div>
    </>
  )
}

export default SearchMovies
