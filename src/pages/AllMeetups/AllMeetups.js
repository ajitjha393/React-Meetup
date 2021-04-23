import { useEffect, useState } from 'react'
import MeetupList from '../../components/Meetups/MeetupList/MeetupList'
import axios from 'axios'

const FIREBASE_BASE_URL =
	'https://react-meetup-events-default-rtdb.firebaseio.com'

function AllMeetupsPage() {
	const [meetups, setMeetups] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const fetchAllMeetups = async () => {
			const res = await axios.get(`${FIREBASE_BASE_URL}/meetups.json`)
			console.log(res)
			const meetupsList = []
			for (const key in res.data) {
				meetupsList.push({
					id: key,
					...res.data[key],
				})
			}
			setIsLoading(false)
			setMeetups(meetupsList)
		}
		fetchAllMeetups()
	}, [])

	if (isLoading) {
		return (
			<section>
				<h1>Loading...</h1>
			</section>
		)
	}

	return (
		<section>
			<h1>All Meetups</h1>
			{meetups.length > 0 && <MeetupList meetups={meetups} />}
		</section>
	)
}

export default AllMeetupsPage
