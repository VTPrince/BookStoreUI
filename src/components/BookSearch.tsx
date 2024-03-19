import React, { useState } from 'react';
import { Book } from './BookStructure.interface';

export const BookSearch = () => {
	const [query, setQuery] = useState('');
	const [books, setBooks] = useState<Book[]>([]);

	const handleSearch = async () => {
		const bookUrl = `http://localhost:5088/book/?query=${query}`;
		try {
			const response = await fetch(bookUrl);
			if (!response.ok) {
				throw new Error('API ERROR');
			}
			const data: Book[] = await (response.json() as Promise<Book[]>);
			setBooks(data);
			console.log('data', data);
		} catch (error) {
			console.log('error', error);
		}
	};

	return (
		<div>
			<input
				placeholder="Enter Book Title to Search"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
			<button onClick={handleSearch}>Search</button>
			{books.map((book) => {
				return (
					<ul key={book.id}>
						<li>
							{book.title}
							<ul>
								<li>By {book.author}</li>
							</ul>
						</li>
					</ul>
				);
			})}
		</div>
	);
};
