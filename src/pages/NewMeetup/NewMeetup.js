import NewMeetupForm from '../../components/Meetups/NewMeetupForm/NewMeetupForm'

import axios from 'axios'

const FIREBASE_BASE_URL =
	'https://react-meetup-events-default-rtdb.firebaseio.com'

function NewMeetupPage() {
	const addMeetupHandler = async meetupData => {
		try {
			const res = await axios.post(
				`${FIREBASE_BASE_URL}/meetups.json`,
				meetupData
			)
			console.log(res)
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<section>
			<h1>Add New Meetup</h1>
			<NewMeetupForm onAddMeetup={addMeetupHandler} />
		</section>
	)
}

export default NewMeetupPage
