import type { NextPage } from 'next'
import { ThemeProvider } from '@mui/private-theming'
import { Theme } from '../src/config/Theme'

const Home: NextPage = () => {
	return <ThemeProvider theme={Theme}>Hello World</ThemeProvider>
}

export default Home
