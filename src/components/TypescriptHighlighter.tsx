import React from 'react'
import { Light } from 'react-syntax-highlighter'
import ts from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript'
import { a11yDark, a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { useThemeMode } from '../utils/useThemeMode'

Light.registerLanguage('ts', ts)


export const TypescriptHighlighter = ({children}:any) => {
	const { mode } = useThemeMode()

	return (
		<Light
			style={mode === 'dark' ? a11yDark : a11yLight}
			language='ts'
		>
			{children}
		</Light>
	)
}
