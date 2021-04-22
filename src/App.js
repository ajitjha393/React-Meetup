import { Route, Switch } from 'react-router-dom'

import AllMeetupsPage from './pages/AllMeetups/AllMeetups'
import FavoritesPage from './pages/Favorites/Favorites'
import NewMeetupPage from './pages/NewMeetup/NewMeetup'
import Layout from './components/Layout/Layout'

function App() {
	return (
		<Layout>
			<Switch>
				<Route path="/" exact>
					<AllMeetupsPage />
				</Route>
				<Route path="/favorites">
					<FavoritesPage />
				</Route>
				<Route path="/new-meetup">
					<NewMeetupPage />
				</Route>
			</Switch>
		</Layout>
	)
}

export default App
