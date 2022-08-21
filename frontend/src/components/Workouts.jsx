import { useWorkoutContext } from '../hooks/useWorkoutContext'
import { useAuthContext } from '../hooks/useAuthContext'

// date-format using date-fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const Workouts = ({ workout: { title, load, reps, _id, createdAt } }) => {
  const { dispatch } = useWorkoutContext()
  const { user } = useAuthContext()

  const handleClick = async () => {
    if (!user) {
      return
    }
    const res = await fetch(`/api/workouts/${_id}`, {
      method: 'DELETE',
      Authorization: `Bearer ${user.token}`,
    })

    const json = await res.json()

    if (res.ok) {
      dispatch({ type: 'DELETE_WORKOUT', payload: json._id })
    }
  }

  return (
    <div className='workout-details'>
      <h4>{title}</h4>
      <p>
        <strong>Load (kg): {load}</strong>
      </p>
      <p>
        <strong>Reps (kg): {reps}</strong>
      </p>
      <p>{formatDistanceToNow(new Date(createdAt), { addSuffix: true })}</p>
      <span className='material-symbols-outlined' onClick={handleClick}>
        Delete
      </span>
    </div>
  )
}

export default Workouts
