import { useState } from 'react'

import { useWorkoutContext } from '../hooks/useWorkoutContext'

const WorkoutForm = () => {
  const [title, setTitle] = useState(null)
  const [load, setLoad] = useState(null)
  const [reps, setReps] = useState(null)
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const { dispatch } = useWorkoutContext()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const workout = {
      title,
      load,
      reps,
    }

    const res = await fetch('/api/workouts', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const json = await res.json()

    if (!res.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }

    if (res.ok) {
      setTitle(null)
      setLoad(null)
      setReps(null)
      setError(null)

      setEmptyFields([])
      dispatch({ type: 'CREATE_WORKOUT', payload: json })

      alert('Workout added!')
    }
  }

  return (
    <form className='create' onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>

      <label>Exercise Title:</label>
      <input
        type='text'
        onChange={(e) => {
          setTitle(e.target.value)
        }}
        value={title}
        className={emptyFields.includes('title') ? 'error' : ''}
      />

      <label>Load (in Kg):</label>
      <input
        type='number'
        onChange={(e) => {
          setLoad(e.target.value)
        }}
        value={load}
        className={emptyFields.includes('load') ? 'error' : ''}
      />

      <label>Reps (in Kg):</label>
      <input
        type='number'
        onChange={(e) => {
          setReps(e.target.value)
        }}
        value={reps}
        className={emptyFields.includes('reps') ? 'error' : ''}
      />

      <button>Add Workout</button>
      {error && <div className='error'>{error}</div>}
    </form>
  )
}

export default WorkoutForm
