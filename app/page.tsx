import MovieList from "@/components/MovieList";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center p-6 md:p-10">
			<div className="w-full lg:max-w-[850px]">
				<h1 className="text-xl font-bold w-full mb-10 mt-20">
					Movie Watch List
				</h1>
			</div>
			<section className="movie-list w-full h-full">
				<MovieList />
			</section>
		</main>
	);
}
