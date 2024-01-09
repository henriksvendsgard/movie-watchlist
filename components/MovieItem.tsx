// Interface can be used here:

interface MovieItemProps {
	movie: {
		id: number;
		poster_path: string;
		title: string;
		overview: string;
	};
}

export default function MovieItem({ movie }: MovieItemProps) {
	const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

	return (
		<div className="flex group hover:scale-105 transition ease-out cursor-pointer h-96 rounded-lg relative p-4">
			<div className="absolute bg-gradient-to-t group-hover:from-slate-950 from-indigo-950/20 rounded-lg l w-full h-full top-0 right-0 left-0 bottom-0 z-10"></div>
			<img
				className="movie-image rounded-lg absolute w-full h-full object-cover top-0 right-0 left-0 bottom-0"
				src={imageUrl}
				alt=""
			/>
			<div className="flex flex-col justify-end z-20">
				<h3 className="text-xl text-white">{movie.title}</h3>
				<p className="hidden sm:block lg:hidden">{movie.overview}</p>
			</div>
		</div>
	);
}
