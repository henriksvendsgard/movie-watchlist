import { notFound } from "next/navigation";
import MovieList from "@/components/MovieList";
import { getPopularMovies, getSearchedMovies } from "@/lib/getMovies";

type SearchPageProps = {
	params: {
		term: string;
	};
};

async function SearchPage({ params: { term } }: SearchPageProps) {
	if (!term) notFound();

	// Removes spaces from the search term
	const termToUse = decodeURI(term);

	const searchedMovies = await getSearchedMovies(termToUse);
	const popularMovies = await getPopularMovies();

	return (
		<>
			<main className="flex min-h-screen flex-col items-center p-6 md:p-10">
				<section className="movie-list w-full h-full">
					<MovieList
						title={`Movie results for "${termToUse}"`}
						movies={searchedMovies}
						isVertical
					/>
					<MovieList
						title="You may also like..."
						movies={popularMovies}
					/>
				</section>
			</main>
		</>
	);
}

export default SearchPage;
