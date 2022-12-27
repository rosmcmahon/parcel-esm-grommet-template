import { Box, Card } from 'grommet'
import React from 'react'

interface Props {
	imageDark: URL		// e.g. imageDark={new URL('../assets/image_dark.png', import.meta.url)}
	imageLight: URL 
	height?: string		// defaults to '200px'
}

export const Image = ({imageDark, imageLight, height = '200px'}: Props) => (
	<picture >
		<source
			srcSet={imageDark.href}
			height={height}
			media='(prefers-color-scheme: dark)'
		/>
		<img
			src={imageLight.href}
			height={height}
			alt='light mode image'
		/>
	</picture>
)
