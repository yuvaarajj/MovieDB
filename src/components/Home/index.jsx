import {useEffect} from 'react'
import GlobalNav from '../NavBar'

const HomePage = () => {
  const getPopularMovies = async () => {
    const url =
      'https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1'
    const options = {
      method: 'GET',
    }
    const response1 = await fetch(url, options)
    const response2 = await response1.json()
    console.log(response2)
  }
  useEffect(() => {
    getPopularMovies()
  })

  return (
    <div>
      <GlobalNav />
    </div>
  )
}

export default HomePage
