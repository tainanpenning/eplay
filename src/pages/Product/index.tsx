import { useParams } from 'react-router-dom'
import { Hero } from '../../components/Hero'

export const Product = () => {
  const { id } = useParams()

  return (
    <>
      <Hero />
    </>
  )
}
