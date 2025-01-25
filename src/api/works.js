import { useWorksStore } from '@/store/works'

export const getWorkById = async (id) => {
  const store = useWorksStore()
  return store.getWorkById(id)
} 