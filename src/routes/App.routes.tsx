import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import Introduce from "../pages/Introduce";
import StudyProgram from "../pages/StudyProgram";

export default function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/introduce"
          element={
            <Layout>
              <Introduce />
            </Layout>
          }
        />
        <Route
          path="study-program"
          element={
            <Layout>
              <StudyProgram />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
