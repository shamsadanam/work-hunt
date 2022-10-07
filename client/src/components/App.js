import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Profile from "./Profile";
import Register from "./register/Register";
import RegisterApplicant from "./register/RegisterApplicant";
import RegisterRecruiter from "./register/RegisterRecruiter";
import Feeds from "./Feeds";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register/applicant" element={<RegisterApplicant />} />
          <Route path="/register/recruiter" element={<RegisterRecruiter />} />
          <Route path="/feeds" element={<Feeds />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

// Client ID
// 245855587855-8jc4p7l0qev9fjkeoijt3mh0o0b2agch.apps.googleusercontent.com
