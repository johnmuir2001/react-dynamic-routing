import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'

import Home from "./pages/Home"
import About from './pages/About'
import Contact from './pages/Contact'
import Film from './pages/Film'

const App = () => {

  return (
    <BrowserRouter>
      <h1>React Router</h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/about" element={<About />} ></Route>
        <Route path="/contact" element={<Contact />} ></Route>
        {/* The dynamic route has a parameter as an unknown value but will be used in Film component */}
        <Route path="/:productId" element={<Film />} ></Route>
      </Routes>

      <footer>
        <h2>This is my footer</h2>
      </footer>

    </BrowserRouter>
  )
}

export default App
