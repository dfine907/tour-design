import { useEffect, useState } from 'react'
import { Loading } from './components/Loading'
import Tours from './components/Tours'

const url = 'https://www.course-api.com/react-tours-project'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState([])

  const fetchTours = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setTours(tours)
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }
  //invoke ONCE when the app loads
  useEffect(() => {
    fetchTours()
  }, [])

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  //TODO:


  return (
    <>
    <main>

      <Tours tours={tours} />
    </main>
    
    </>

  )
  
}
export default App
