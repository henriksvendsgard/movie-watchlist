"use client";

import { useEffect, useState } from "react";
import MovieItem from "./MovieItem";

function MovieList() {
	const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=d2c6d5a6b99ba1182f7cd04310b54706`;

	const [movies, setMovies] = useState([]);

	useEffect(() => {
		fetch(apiUrl)
			.then((response) => response.json())
			.then((data) => {
				setMovies(data.results);
			});
	}, []);
	return (
		<>
			{movies.map((movieCard) => (
				<MovieItem movie={movieCard} />
			))}
		</>
	);
}

export default MovieList;
