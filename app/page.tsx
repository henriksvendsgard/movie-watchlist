import MovieList from "@/components/MovieList";
import {
	getPopularMovies,
	getTopRatedMovies,
	getUpcomingMovies,
} from "@/lib/getMovies";

export default async function Home() {
	const upcomingMovies = await getUpcomingMovies();
	const topRatedMovies = await getTopRatedMovies();
	const popularMovies = await getPopularMovies();

	return (
		<main className="flex min-h-screen flex-col items-center p-6 md:p-10">
			<div className="w-full"></div>
			<section className="movie-list w-full h-full">
				<MovieList movies={upcomingMovies} title="Upcoming" />
				<MovieList movies={topRatedMovies} title="Top Rated" />
				<MovieList movies={popularMovies} title="Popular" />
			</section>
		</main>
	);
}
