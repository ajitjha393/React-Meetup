import { Route } from 'react-router-dom'

import AllMeetupsPage from './pages/AllMeetups/AllMeetups'
import FavoritesPage from './pages/Favorites/Favorites'
import NewMeetupPage from './pages/NewMeetup/NewMeetup'

function App() {
	return (
		<div>
			<Route path="/">
				<AllMeetupsPage />
			</Route>
			<Route path="/new-meetup">
				<NewMeetupPage />
			</Route>
			<Route path="/favorites">
				<FavoritesPage />
			</Route>
		</div>
	)
}

export default App
