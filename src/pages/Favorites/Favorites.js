import { useContext } from 'react'
import FavoritesContext from '../../store/favorites-context'
import MeetupList from '../../components/Meetups/MeetupList/MeetupList'

function FavoritesPage() {
	const { favorites, totalFavorites } = useContext(FavoritesContext)

	let content = null
	if (totalFavorites === 0) {
		content = <p>You got no favorites yet. Start adding some?</p>
	} else {
		content = <MeetupList meetups={favorites} />
	}

	return (
		<section>
			<h1>Favorites Page</h1>
			{content}
		</section>
	)
}

export default FavoritesPage
