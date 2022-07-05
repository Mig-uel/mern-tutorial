import { useContext } from 'react'
import { WorkoutsContext } from '../contexts/workouts.context'

export const useWorkoutContext = () => {
  const context = useContext(WorkoutsContext)

  if (!context) {
    throw Error('useWorkoutsContext must be used inside a WorkoutsProvider')
  }

  return context
}
