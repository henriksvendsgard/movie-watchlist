"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";

const SearchInputSchema = z.object({
	search: z.string().min(2).max(50),
});

function SearchInput() {
	const router = useRouter();

	// 1. Define your form schema
	const form = useForm<z.infer<typeof SearchInputSchema>>({
		resolver: zodResolver(SearchInputSchema),
		defaultValues: {
			search: "",
		},
	});

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof SearchInputSchema>) {
		router.push(`/search/${values.search}`);
		console.log(values);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="search"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									placeholder="Search movies..."
									{...field}
								/>
							</FormControl>
						</FormItem>
					)}
				/>
			</form>
		</Form>
	);
}

export default SearchInput;
