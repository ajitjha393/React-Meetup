import { useContext } from 'react'
import FavoritesContext from '../../store/favorites-context'
import MeetupList from '../../components/Meetups/MeetupList/MeetupList'

function FavoritesPage() {
	const { favorites } = useContext(FavoritesContext)

	return (
		<section>
			<h1>Favorites Page</h1>
			<MeetupList meetups={favorites} />
		</section>
	)
}

export default FavoritesPage
