import { createContext, useState } from 'react'

// Creating context obj and defining piece of data that we are managing
const FavoritesContext = createContext({
	favorites: [],
	totalFavorites: 0,
})

function FavoritesContextProvider(props) {
	const [userFavorites, setUserFavorites] = useState([])

	function addFavoritesHandler(newFavMeetup) {
		setUserFavorites(prevUserFavorites =>
			prevUserFavorites.concat(newFavMeetup)
		)
	}

	function removeFavoritesHandler(meetupId) {
		setUserFavorites(prevUserFavorites =>
			prevUserFavorites.filter(meetup => meetup.id !== meetupId)
		)
	}

	function meetupIsFavoriteHandler(meetupId) {
		return userFavorites.some(meetup => meetup.id === meetupId)
	}

	const contextValue = {
		favorites: userFavorites,
		totalFavorites: userFavorites.length,
	}

	return (
		<FavoritesContext.Provider value={contextValue}>
			{props.children}
		</FavoritesContext.Provider>
	)
}

export default FavoritesContextProvider
