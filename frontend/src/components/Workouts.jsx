const Workouts = ({ workout: { title, load, reps, createdAt } }) => {
  return (
    <div className='workout-details'>
      <h4>{title}</h4>
      <p>
        <strong>Load (kg): {load}</strong>
      </p>
      <p>
        <strong>Reps (kg): {reps}</strong>
      </p>
      <p>{createdAt}</p>
    </div>
  )
}

export default Workouts
