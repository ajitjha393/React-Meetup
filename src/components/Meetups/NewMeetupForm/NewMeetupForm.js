import { useRef } from 'react'

import Card from '../../UI/Card/Card'
import classes from './NewMeetupForm.module.css'

function NewMeetupForm({ onAddMeetup }) {
	const titleInputRef = useRef()
	const imageInputRef = useRef()
	const addressInputRef = useRef()
	const descriptionInputRef = useRef()

	const submitHandler = ev => {
		ev.preventDefault()
		const enteredTitle = titleInputRef.current.value
		const enteredImage = imageInputRef.current.value
		const enteredAddress = addressInputRef.current.value
		const enteredDescription = descriptionInputRef.current.value

		const meetupData = {
			title: enteredTitle,
			image: enteredImage,
			address: enteredAddress,
			description: enteredDescription,
		}
		// console.log(meetupData)
		onAddMeetup(meetupData)
	}

	return (
		<Card>
			<form className={classes.form} onSubmit={submitHandler}>
				<div className={classes.control}>
					<label htmlFor="title"> Meetup Title</label>
					<input
						type="text"
						required
						id="title"
						name="title"
						ref={titleInputRef}
					/>
				</div>

				<div className={classes.control}>
					<label htmlFor="image"> Meetup Cover Image</label>
					<input
						type="url"
						required
						id="image"
						name="image"
						ref={imageInputRef}
					/>
				</div>

				<div className={classes.control}>
					<label htmlFor="address"> Address </label>
					<input
						type="text"
						required
						id="address"
						name="address"
						ref={addressInputRef}
					/>
				</div>
				<div className={classes.control}>
					<label htmlFor="description"> Description </label>
					<textarea
						type="text"
						required
						id="description"
						name="description"
						rows="5"
						ref={descriptionInputRef}
					></textarea>
				</div>

				<div className={classes.actions}>
					<button>Add Meetup</button>
				</div>
			</form>
		</Card>
	)
}

export default NewMeetupForm
