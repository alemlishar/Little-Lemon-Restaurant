import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import BookingPage from "./pages/BookingPage"
import Nav from "./pages//Nav"
import Main from "./pages/Main"
import PageNotFound from "./pages/PageNotFound"
import ConfirmedBooking from "./pages/ConfirmedBooking"
function App() {
  return (
    <>
      <BrowserRouter>
        <Nav></Nav>
        <Main></Main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="booking" element={<BookingPage />} />
          <Route path="confirmedbook" element={<ConfirmedBooking />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
