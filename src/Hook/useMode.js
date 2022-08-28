import { useContext } from 'react';
import { Theme } from '../context/Mode.js';

export const useMode = () => {
	const { mode, setMode } = useContext(Theme);
	return { mode, setMode };
};
