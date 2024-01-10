import { Genres } from "@/typings";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ChevronDown } from "lucide-react";
import Link from "next/link";

async function GenreSelector() {
	const url =
		"https://api.themoviedb.org/3/genre/movie/list?api_key=d2c6d5a6b99ba1182f7cd04310b54706&language=en";

	const options: RequestInit = {
		method: "GET",
		headers: {
			accept: "application/json",
		},
		// API Caching
		next: {
			// How long to cache the response before revalidating
			revalidate: 60 * 60 * 24, // 24 hours
		},
	};

	const response = await fetch(url, options);
	const data = (await response.json()) as Genres;

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="flex justify-between items-center gap-1">
				{/* Change this to selected genre after a genre is chosen */}
				Genre <ChevronDown className="w-4 h-4" />
			</DropdownMenuTrigger>

			<DropdownMenuContent className="">
				<DropdownMenuLabel className="">
					Select a genre
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				{data.genres.map((genre) => (
					<DropdownMenuItem key={genre.id} className="cursor-pointer">
						<Link href={`/genre/${genre.id}?genre=${genre.name}`}>
							{genre.name}
						</Link>
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export default GenreSelector;
