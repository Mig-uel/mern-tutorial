import { useEffect, useState } from 'react'

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
    <div className='Home'>
      <div className='home'>
        {workouts &&
          workouts.map((workout) => {
            return <p key={workout._id}>{workout.title}</p>
          })}
      </div>
    </div>
  )
}

export default Home
