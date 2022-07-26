import React from "react"

function Movie({ props }) {
  const { title, release_date, vote_average, id, poster_path } = props
  return (
    <div className="poster">
      <div className="poster--content">
        <h1 className="poster--content--title">{title}</h1>
        <p className="poster--content--release_date">
          <small>개봉날짜 : {release_date}</small>
        </p>
        <p className="poster--content--rating">
          <small>평점✨: {vote_average}점</small>
        </p>
      </div>
      <div className="poster--img" key={id}>
        <img
          src={`https://www.themoviedb.org/t/p/original${poster_path}`}
          alt={title + "poster"}
        />
      </div>
    </div>
  )
}

export default Movie
