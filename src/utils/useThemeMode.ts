import { useState } from 'react'

export const useThemeMode = () => {
	
	// get initial theme
	const getThemeMode = ()=> window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
	
	// listen for changes
	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ev => {
		setMode(ev.matches ? 'dark' : 'light')
	})
	
	const [mode, setMode] = useState<'dark' | 'light'>(getThemeMode())

	return {
		mode,
	}
}
