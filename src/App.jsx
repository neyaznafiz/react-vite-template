import { RouterProvider } from 'react-router-dom'
import './resource/css/global.css'
import './resource/css/app.css'
import routes from './routes/routes'
import { useOpening } from './hooks/useLoadingOpening'
import { Loading } from './components'


function App() {

  const [loading] = useOpening()

  return (
    <div>
      {
        loading ?
          <Loading />
          :
          <div id='app'>
            <h1>Hello World</h1>
            <RouterProvider router={routes} />
          </div>
      }
    </div>
  )
}

export default App
