import { BrowserRouter, Routes, Route } from "react-router-dom";
import Project from "./routes/Project";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/project" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;