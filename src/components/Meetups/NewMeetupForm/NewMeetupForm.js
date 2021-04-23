import Card from '../../UI/Card/Card'
import classes from './NewMeetupForm.module.css'

function NewMeetupForm() {
	return (
		<Card>
			<form className={classes.form}>
				<div className={classes.control}>
					<label htmlFor="title"> Meetup Title</label>
					<input type="text" required id="title" name="title" />
				</div>

				<div className={classes.control}>
					<label htmlFor="image"> Meetup Cover Image</label>
					<input type="url" required id="image" name="image" />
				</div>

				<div className={classes.control}>
					<label htmlFor="address"> Address </label>
					<input type="text" required id="address" name="address" />
				</div>
				<div className={classes.control}>
					<label htmlFor="description"> Description </label>
					<textarea
						type="text"
						required
						id="description"
						name="description"
						rows="5"
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
