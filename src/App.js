import './App.css';
import AllCourses from './javascript/AllCourses';
import Header from './javascript/Header';
import './stylesheet/Header.css'
import './stylesheet/AllCourses.css'
import Wishlist from './javascript/Wishlist';
import CourseDetails from './javascript/CourseDetails';
import './stylesheet/CourseDetails.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Checkout from './javascript/Checkout';
import './stylesheet/Checkout.css'
import User from './javascript/User';
import './stylesheet/User.css'
import './stylesheet/Wishlist.css'
function App() {
  return (
    // <div className="App">
    //   <Header/>
    //   {/* <AllCourses/> */}
    //   {/* <Wishlist/> */}
    //   <CourseDetails/>
    // </div>

    <Router>
    <div className="App">
      <Header/>
      <Routes>
          <Route exact path="/" element={<AllCourses/>}/>
          <Route exact path="/wishlist" element={<Wishlist/>}/>
          <Route exact path="/coursedetails" element={<CourseDetails/>}/>
          <Route exact path="/checkout" element={<Checkout/>}/>
          <Route exact path="/user" element={<User/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
