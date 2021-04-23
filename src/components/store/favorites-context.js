import { createContext, useState } from 'react'

// Creating context obj and defining piece of data that we are managing
const FavoritesContext = createContext({
	favorites: [],
	totalFavorites: 0,
})

function FavoritesContextProvider(props) {
	const [userFavorites, setUserFavorites] = useState([])
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
