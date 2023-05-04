import { Routes, Route, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Footer from "../src/components/footer/Footer";
import LandingPageHeader from "./components/header/LandingPageHeader";
import LoginModal from "./components/modal/LoginModal";
import CourseCategory from "./components/categories/course-category/CourseCategory";
import ViewCart from "./components/cart/ViewCart";
import Checkout from "./components/cart/Checkout";
import LandingPage from "./components/landing-page/LandingPage";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import Design from "./components/categories/categorySubTypes/Design";
import Header from "./components/header/Header";
import RegisterModal from "./components/modal/RegisterModal";
import CourseCategoryDetails from "./components/categories/course-category/course-details/CourseCategoryDetails";

const App = () => {

  const location = useLocation();
  const { isLoggedIn } = useSelector((state) => state.modal);
  const headerPaths = ["/"];
  const shouldRenderLandingHeader = headerPaths.includes(location.pathname);

  return (
    <div className="App">
      {shouldRenderLandingHeader ? <LandingPageHeader /> : <Header />}
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginModal />} />
        <Route path="/register" element={<RegisterModal />} />
       
          <Route path="/design" element={<Design />} />
          <Route path="/courseCategory" element={<CourseCategory />} />
          <Route path='/courseCategoryDetails/:id' element={<CourseCategoryDetails />} />
          <Route element={<ProtectedRoute isAuthenticated={isLoggedIn} />}>
          <Route path="/viewcart" element={<ViewCart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
