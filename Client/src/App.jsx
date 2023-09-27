import { BrowserRouter,Routes,Route } from "react-router-dom"
import { HomePage, Navbar } from "./components"

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App