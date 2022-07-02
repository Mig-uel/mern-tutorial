import { useEffect, useState } from 'react'

// components
import Workouts from '../components/Workouts'
import WorkoutForm from '../components/WorkoutForm'

const Home = () => {
  const [workouts, setWorkouts] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/workouts')
        // console.log(res)

        const json = await res.json()
        // console.log(json)

        if (res.ok) {
          setWorkouts(json)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className='home'>
      <div className='workouts'>
        {workouts &&
          workouts.map((workout) => {
            return <Workouts workout={workout} key={workout._id} />
          })}
      </div>
      <WorkoutForm />
    </div>
  )
}

export default Home
