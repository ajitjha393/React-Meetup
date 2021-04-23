import NewMeetupForm from '../../components/Meetups/NewMeetupForm/NewMeetupForm'

const FIREBASE_BASE_URL =
	'https://react-meetup-events-default-rtdb.firebaseio.com/'

function NewMeetupPage() {
	const addMeetupHandler = meetupData => {}

	return (
		<section>
			<h1>Add New Meetup</h1>
			<NewMeetupForm onAddMeetup={addMeetupHandler} />
		</section>
	)
}

export default NewMeetupPage
