import { Route, Switch } from 'react-router-dom'

import AllMeetupsPage from './pages/AllMeetups/AllMeetups'
import FavoritesPage from './pages/Favorites/Favorites'
import NewMeetupPage from './pages/NewMeetup/NewMeetup'

function App() {
	return (
		<div>
			<Switch>
				<Route path="/favorites">
					<FavoritesPage />
				</Route>
				<Route path="/new-meetup">
					<NewMeetupPage />
				</Route>
				<Route path="/">
					<AllMeetupsPage />
				</Route>
			</Switch>
		</div>
	)
}

export default App
