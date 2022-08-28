import { Route, Routes } from 'react-router-dom';
import { AboutAuthor } from './components/AboutAuthor/AboutAuthor';
import { AboutBook } from './components/AboutBook/AboutBook';
import { Carousel } from './components/Carousel/Carousel';
import { Header } from './components/Header/Header';
import { Jadid } from './components/Jadid/Jadid';
import { Mustaqillik } from './components/Mustaqillik/Mustaqillik';
import { Sovet } from './components/Sovet/Sovet';
import { Taqriz } from './components/Taqriz/Taqriz';
import { Temuriylar } from './components/Temuriylar/Temuriylar';
import { Account, Security, Settings } from './pages/Account/Account';
import { AddAuthor, AddBook } from './pages/Add/Add';
import { Author } from './pages/Author/Author';
import { Home } from './pages/Home/Home';
import { Profile } from './pages/Profile/Profile';
import { Single } from './pages/Single/Single';
import { SingleAuthor } from './pages/Single/SingleAuthor';

function Private() {
	return (
		<>
			<>
				<Header />
				<Routes>
					<Route path='/' element={<Home />}>
						<Route index element={<Temuriylar type='book' />} />
						<Route path='jadid' element={<Jadid type='book' />} />
						<Route path='sovet' element={<Sovet type='book' />} />
						<Route
							path='mustaqillik'
							element={<Mustaqillik type='book' />}
						/>
					</Route>
					<Route path='/author' element={<Author />}>
						<Route index element={<Temuriylar type='author' />} />
						<Route path='jadid' element={<Jadid type='author' />} />
						<Route path='sovet' element={<Sovet type='author' />} />
						<Route
							path='mustaqillik'
							element={<Mustaqillik type='author' />}
						/>
					</Route>

					<Route path='/addAuthor' element={<AddAuthor />} />
					<Route path='/addBook' element={<AddBook />} />

					<Route path='/profile' element={<Profile />}>
						<Route index element={<Account />} />
						<Route path='security' element={<Security />} />
						<Route path='settings' element={<Settings />} />
					</Route>

					<Route path='/book/bookId/:id' element={<Single />}>
						<Route path='author' />
						<Route path='quote' />
						<Route path='review' />
					</Route>

					<Route path='/author/:id' element={<SingleAuthor />} />

					<Route path='*' element={<h2>Error 404</h2>} />
				</Routes>
			</>
		</>
	);
}

export default Private;
