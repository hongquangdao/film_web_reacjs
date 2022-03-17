import axios from 'axios'
import React, { useEffect } from 'react'
import { Chip } from '@mui/material'

const Genres = ({
    type,
    selectedGenres,
    setSelectedGenres,
    genres,
    setGenres,
    setPage
}) => {

    const fetchGenres = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=vi`
        );
        setGenres(data.genres)
    }

    useEffect(() => {
        fetchGenres();
        return () => {
            setGenres({});
        };
    }, [])

    const handleOnClick = (genre) => {
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter((g) => g.id !== genre.id)) // trả lại mảng các phần tử có id ko trùng với id phần từ được selected
        setPage(1)
    }

    const handleOndelete = (genre) => {
        setSelectedGenres(selectedGenres.filter((g) => g.id !== genre.id)) // trả lại mảng được select ko gồm phần tử có cùng id
        setGenres([...genres, genre])
    }

    return (
        <div style={{ padding: "6px 0" }}>
            {selectedGenres && selectedGenres.map((genre) => (
                <Chip
                    key={genre.id}
                    style={{ margin: 2 }}
                    label={genre.name}
                    clickable
                    size="small"
                    color='primary'
                    onDelete={() => handleOndelete(genre)}
                />
            ))}
            {genres && genres.map((genre) => (
                <Chip
                    key={genre.id}
                    style={{ margin: 2, backgroundColor: "white" , fontFamily:'arial' }}
                    label={genre.name}
                    clickable
                    size="small"
                    onClick={() => handleOnClick(genre)}
                />
            ))}
        </div>
    )
}

export default Genres