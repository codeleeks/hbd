import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootPage from './pages/Root'
import HomePage from './pages/Home'
import GiftPage from './pages/Gift'
import LetterPage from './pages/LetterPage'
import PhotoPage from './pages/Photo'
import SongPage from './pages/Song'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'gift',
        element: <GiftPage />,
      },
      {
        path: 'letter',
        element: <LetterPage />,
      },
      {
        path: 'photo',
        element: <PhotoPage />,
      },
      {
        path: 'video',
        element: <SongPage />,
      },
    ],
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
