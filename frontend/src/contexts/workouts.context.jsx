import { createContext, useReducer } from 'react'

// Initial state
export const initialState = {
  workouts: null,
}

// Reducer
export const workoutsReducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_WORKOUTS':
      return {
        workouts: payload,
      }
    case 'CREATE_WORKOUT':
      return {
        workouts: [payload, ...state.workouts],
      }
    case 'DELETE_WORKOUT':
      return {
        ...state,
        workouts: state.workouts.filter((workout) => workout._id !== payload),
      }
    default:
      return state
  }
}

// Context
export const WorkoutsContext = createContext()

// Provider
export const WorkoutsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, initialState)

  return (
    <WorkoutsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutsContext.Provider>
  )
}
