import { useUserAuth } from '../context/AuthContext'

export function useAuth() {
  return useUserAuth()
}