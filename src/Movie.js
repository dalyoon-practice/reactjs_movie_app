import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import LinesEllipsis from 'react-lines-ellipsis';

const Movie=({ poster, title, genres, synopsis })=>(
    <div className="Movie">
        <div className="Movie__Column">
            <MoviePoster poster={ poster } alt={ title }  />
        </div>
        <div className="Movie__Column">
            <h1>{ title }</h1>
            <div className="Movie_Genres">
                {genres.map((genre, index) => <MovieGenre genre={ genre } key={ index }  />)}
            </div>
            <div className="Movie__Synopsis">
                <LinesEllipsis
                    text={ synopsis }
                    maxLine='3'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                />
            </div>
        </div>
    </div>
)

const MoviePoster=({ poster, alt })=>(
    <img src={ poster } className="Movie__Poster" alt={ alt } title={ alt }/>
)

const MovieGenre=({ genre })=>(
    <span className="Movie_Genre">{ genre } </span>    
)

/*
function Movie({ title, poster, genres, synopsis }) {
    return (
        <div className="Movie">
            <div className="Movie__Column">
                <MoviePoster poster={ poster } alt={ title }  />
            </div>
            <div className="Movie__Column">
                <h1>{ title }</h1>
                <div className="Movie_Genres">
                    {genres.map((genre, index) => <MovieGenre genre={ genre } key={ index }  />)}
                </div>
                <p className="Movie__Synopsis">
                    <LinesEllipsis
                        text={ synopsis }
                        maxLine='3'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'
                    />
                </p>
            </div>
        </div>
    )
}
function MoviePoster({ poster, alt }) {
    return (
        <img src={ poster } className="Movie__Poster" alt={ alt } title={ alt } />
    )
}
function MovieGenre({ genre }) {
    return (
        <span className="Movie__Genre">{ genre } </span>
    )
}
*/

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequireed
}
MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}
MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired
}

export default Movie