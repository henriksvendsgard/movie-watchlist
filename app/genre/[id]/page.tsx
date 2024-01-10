import MovieList from "@/components/MovieList";
import { getDiscoverMovies, getPopularMovies } from "@/lib/getMovies";

type Props = {
	params: {
		id: string;
	};
	searchParams: {
		genre: string;
	};
};

async function GenrePage({ params: { id }, searchParams: { genre } }: Props) {
	const genreMovies = await getDiscoverMovies(id);
	const popularMovies = await getPopularMovies();

	return (
		<main className="flex min-h-screen flex-col items-center p-6 md:p-10">
			<section className="movie-list w-full h-full">
				<MovieList
					title={`${genre} movies`}
					movies={genreMovies}
					key={id}
					isVertical
				/>
				<MovieList
					title="You may also like..."
					movies={popularMovies}
				/>
			</section>
		</main>
	);
}

export default GenrePage;
