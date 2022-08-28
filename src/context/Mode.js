import { createContext, useEffect, useState } from 'react';
import './Mode.scss';
const Theme = createContext();

const ThemeProvider = ({ children }) => {
	const [mode, setMode] = useState(
		JSON.parse(window.localStorage.getItem('mode')), 'dark'
	);

	
	return (
		<Theme.Provider value={{ mode, setMode }}>{children}</Theme.Provider>
	);
};

export { Theme, ThemeProvider };
