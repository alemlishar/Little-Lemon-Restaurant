import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import BookingPage from "./components/booking/BookingPage"
import Main from "./pages/Main"
import PageNotFound from "./pages/PageNotFound"
import ConfirmedBooking from "./components/booking/ConfirmedBooking"
import Header from "./pages/Header"
import Footer from "./pages/Footer"
function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Main></Main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="booking" element={<BookingPage />} />
          <Route path="confirmedbook" element={<ConfirmedBooking />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
