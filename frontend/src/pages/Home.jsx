import { useEffect } from 'react'
import { useWorkoutContext } from '../hooks/useWorkoutContext'

// components
import Workouts from '../components/Workouts'
import WorkoutForm from '../components/WorkoutForm'

const Home = () => {
  const { workouts, dispatch } = useWorkoutContext()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/workouts')
        // console.log(res)

        const json = await res.json()
        // console.log(json)

        if (res.ok) {
          //setWorkouts(json)
          dispatch({ type: 'SET_WORKOUTS', payload: json })
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [dispatch])

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
