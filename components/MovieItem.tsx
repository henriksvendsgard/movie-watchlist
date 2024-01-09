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
		<div className="card group h-96 w-64 rounded-lg relative p-4">
			<img
				className="movie-image brightness-50 rounded-lg absolute w-full h-full -z-10 object-cover top-0 right-0 left-0 bottom-0"
				src={imageUrl}
				alt=""
			/>
			<h3 className="text-2xl">{movie.title}</h3>
			<p className="hidden group-hover:block">{movie.overview}</p>
		</div>
	);
}
