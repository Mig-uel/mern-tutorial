import { useContext } from 'react'
import { AuthContext } from '../contexts/auth.context'

export const useAuthContext = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw Error('useAuthContext must be used inside a AuthContextProvider')
  }

  return context
}