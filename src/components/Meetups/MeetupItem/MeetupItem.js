import { useContext } from 'react'

import Card from '../../UI/Card/Card'

import classes from './MeetupItem.module.css'
import FavoritesContext from '../../../store/favorites-context'

function MeetupItem({ id, title, address, description, image }) {
	const { meetupIsFavorite, addFavorite, removeFavorites } = useContext(
		FavoritesContext
	)

	const toggleFavoritesHandler = () => {
		if (meetupIsFavorite(id)) {
			removeFavorites(id)
		} else {
			addFavorite({
				id,
				title,
				address,
				description,
				image,
			})
		}
	}

	return (
		<li className={classes.item}>
			<Card>
				<div className={classes.image}>
					<img src={image} alt={title} />
				</div>
				<div className={classes.content}>
					<h3>{title}</h3>
					<address>{address}</address>
					<p>{description}</p>
				</div>

				<div className={classes.actions}>
					<button onClick={toggleFavoritesHandler}>To Favorites</button>
				</div>
			</Card>
		</li>
	)
}

export default MeetupItem
