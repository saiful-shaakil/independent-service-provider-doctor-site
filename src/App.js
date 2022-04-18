import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import Login from "./Components/Login/Login";
import Register from "./Components/Login/Register";
import Navbar from "./Components/Home/Navbar/Navbar";
import NotFound from "./Components/NotFound/NotFound";
import RequireAuth from "./Components/Login/RequireAuth/RequireAuth";
import Booking from "./Components/Home/Services/Booking";
import Footer from "./Components/Home/Footer/Footer";
import Services from "./Components/Home/Services/Services";
import Blogs from "./Components/Blogs/Blogs";
import About from "./Components/About/About";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<LandingPage></LandingPage>}></Route>
        <Route path="/home" element={<LandingPage></LandingPage>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route
          path="/services/booking"
          element={
            <RequireAuth>
              <Booking></Booking>
            </RequireAuth>
          }
        ></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/booking"
          element={
            <RequireAuth>
              <Booking></Booking>
            </RequireAuth>
          }
        ></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
