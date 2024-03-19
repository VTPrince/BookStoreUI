import React from 'react';
import { BookSearch } from './components/BookSearch';

const App: React.FC = () => {
	return (
		<div>
			Search for your Books Here :
			<BookSearch />
		</div>
	);
};

export default App;
