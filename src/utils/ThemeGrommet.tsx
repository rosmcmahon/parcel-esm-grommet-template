import { grommet, Grommet } from 'grommet'
import { deepMerge } from 'grommet/utils'
import React, { useState } from 'react'
import { useThemeMode } from './useThemeMode'

const theme = deepMerge(grommet, {
  body: {
    minHeight: '100vh',
		margin: 0,
  }
})


const ThemeGrommet = ({children}:any) => {

	const { mode } = useThemeMode()

	return (
		<Grommet full theme={theme} themeMode={ mode }>
			{children}
		</Grommet>
	)
}

export default ThemeGrommet
