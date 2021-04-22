import MeetupItem from '../MeetupItem/MeetupItem'
import classes from './MeetupList.module.css'

function MeetupList({ meetups }) {
	return (
		<ul className={classes.list}>
			{meetups.map(({ title, image, address, description, id }) => (
				<MeetupItem
					key={id}
					title={title}
					address={address}
					description={description}
					image={image}
				/>
			))}
		</ul>
	)
}

export default MeetupList
