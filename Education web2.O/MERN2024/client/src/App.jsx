import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Error from "./pages/Error";
import Logout from "./pages/Logout";
import AdminLayout from "./components/layouts/Admin-Layout";
import AdminUsers from "./pages/Admin-Users";
import AdminContacts from "./pages/Admin-Contacts";
import AdminUpdate from "./pages/Admin-Update";
import Footer from "./pages/footer/Footer";
import "../public/css/animate.css";
import STEM from "./pages/K12/STEM";
import AssessmentDevelopment from "./pages/K12/AssessmentDevelopment";
import PPTDevelopment from "./pages/K12/PPTDevelopment";
import GamifiedLearning from "./pages/K12/GamifiedLearning";
import FlashcardCreation from "./pages/K12/FlashcardCreation";
import TeacherLessonPlan from "./pages/K12/TeacherLessonPlan";
import EducationalContentDevelopment from "./pages/K12/EducationalContentDevelopment";
import K6Education from "./pages/K12/K6Education";
import WorkbookDevelopment from "./pages/K12/WorkbookDevelopment";
import HigherCurriculum from "./pages/HigherEducation/CurriculumDevelopment";
import HigherDevelopment from "./pages/HigherEducation/HigherDevelopment";
import HigerLectureManual from "./pages/HigherEducation/HigerLectureManual";
import HigherManagement from "./pages/HigherEducation/HigherManagement";
import HigherPPTDevelopment from "./pages/HigherEducation/HigherPPTDevelopment";
import HigherVideoLecture from "./pages/HigherEducation/HigherVideoLecture";
import Higher2D3DVideos from "./pages/HigherEducation/Higher2D&3DVideos";
import HigherAnimatedVideos from "./pages/HigherEducation/HigherAnimatedVideos";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/register" element={<Register />} />
          {/* K12 Routes */}
          <Route path="/STEM" element={<STEM />} />
          <Route
            path="/AssessmentDevelopment"
            element={<AssessmentDevelopment />}
          />
          <Route path="/PPTDevelopment" element={<PPTDevelopment />} />
          <Route path="/GamifiedLearning" element={<GamifiedLearning />} />
          <Route path="/FlashcardCreation" element={<FlashcardCreation />} />
          <Route path="/TeacherLessonPlan" element={<TeacherLessonPlan />} />
          <Route
            path="/EducationalContentDevelopment"
            element={<EducationalContentDevelopment />}
          />
          <Route path="/K6Education" element={<K6Education />} />
          <Route
            path="/WorkbookDevelopment"
            element={<WorkbookDevelopment />}
          />
          {/* Higher Routes */}
          <Route path="/HigherCurriculum" element={<HigherCurriculum />} />
          <Route path="/HigherDevelopment" element={<HigherDevelopment />} />
          <Route path="/HigerLectureManual" element={<HigerLectureManual />} />
          <Route path="/HigherManagement" element={<HigherManagement />} />
          <Route path="/HigherPPTDevelopment" element={<HigherPPTDevelopment />} />
          <Route path="/HigherVideoLecture" element={<HigherVideoLecture />} />
          <Route path="/Higher2D3DVideos" element={<Higher2D3DVideos />} />
          <Route path="/HigherAnimatedVideos" element={<HigherAnimatedVideos />} />

          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<Error />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="users" element={<AdminUsers />} />
            <Route path="contacts" element={<AdminContacts />} />
            <Route path="users/:id/edit" element={<AdminUpdate />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
