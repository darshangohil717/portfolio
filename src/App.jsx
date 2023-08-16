import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeComponent from './pages/HomeComponent'
import Layout from './components/Layout'

function App() {

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<HomeComponent />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
