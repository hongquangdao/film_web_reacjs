import axios from 'axios'
import React from 'react'
import "./Movies.css"
import { useState, useEffect } from 'react'
import SingleContent from '../../components/SingleContent/SingleContent'
import CustomPagination from '../../components/Pagination/CustomPagination'
import Genres from '../../components/Genres/Genres'
import useGenre from "../../hooks/useGenre"

const Movies = () => {

    const [content, setContent] = useState([]);
    const [page, setPage] = useState(1);
    const [numofPages, setNumofPages] = useState();
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [genres, setGenres] = useState([]);
    const genreforURL = useGenre(selectedGenres);

    const fetchMovies = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=vi&page=${page}&with_genres=${genreforURL}`
        );
        setContent(data.results);
        setNumofPages(data.total_pages)
        console.log(data);
    }

    useEffect(() => {
        window.scroll(0, 0);
        fetchMovies();
        //eslint
    }, [page, genreforURL])

    return (
        <div>
            <span className="pageTitle">PHIM CHIẾU RẠP</span>
            <Genres
                type="movie"
                setPage={setPage}
                genres={genres}
                setGenres={setGenres}
                selectedGenres={selectedGenres}
                setSelectedGenres={setSelectedGenres}
            />
            <div className="movies">
                {content &&
                    content.map((c) => (
                        <SingleContent
                            key={c.id}
                            id={c.id}
                            poster={c.poster_path}
                            title={c.title || c.name}
                            date={c.first_air_date || c.release_date}
                            media_type="movie"
                            vote_average={c.vote_average}
                            overview={c.overview}
                        />
                    ))}
            </div>
            {numofPages > 1 &&
                <CustomPagination setPage={setPage} numofPages={numofPages} />
            }
        </div>
    )
}

export default Movies