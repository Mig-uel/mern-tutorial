import { useState } from 'react'

const WorkoutForm = () => {
  const [title, setTitle] = useState(null)
  const [load, setLoad] = useState(null)
  const [reps, setReps] = useState(null)
  const [error, setError] = useState(null)

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
    }

    if (res.ok) {
      setTitle(null)
      setLoad(null)
      setReps(null)
      setError(null)

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
      />

      <label>Load (in Kg):</label>
      <input
        type='number'
        onChange={(e) => {
          setLoad(e.target.value)
        }}
        value={load}
      />

      <label>Reps (in Kg):</label>
      <input
        type='number'
        onChange={(e) => {
          setReps(e.target.value)
        }}
        value={reps}
      />

      <button>Add Workout</button>
      {error && <div className='error'>{error}</div>}
    </form>
  )
}

export default WorkoutForm
