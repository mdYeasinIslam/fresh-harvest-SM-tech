'use client'
import { useParams } from 'next/navigation'

const useFindParams = () => {
    const params = useParams()
  return params
}

export default useFindParams