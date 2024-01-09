import MovieList from "@/components/MovieList";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center p-24">
			<div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
				<h1 className="text-center w-full mb-10">Movie Watch List</h1>
			</div>
			<section className="movie-list grid grid-cols-3 gap-10 w-1/2 h-full">
				<MovieList />
			</section>
		</main>
	);
}
