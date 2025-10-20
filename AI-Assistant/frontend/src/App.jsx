import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Workspace from "./pages/Workspace";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import YouTubeTranscriber from "./pages/YouTubeTranscriber";
import PDFSummarizer from "./pages/PdfSummarizer";
import AIWriter from "./pages/AiWriter";
import ProtectedRoute from "./components/common/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/logout"
            element={
              <ProtectedRoute>
                <Logout />
              </ProtectedRoute>
            }
          />
          <Route
            path="/workspace"
            element={
              <ProtectedRoute>
                <Workspace />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
          <Route
            path="/youtube-transcriber"
            element={
              <ProtectedRoute>
                <YouTubeTranscriber />
              </ProtectedRoute>
            }
          />
          <Route
            path="/pdf-summarizer"
            element={
              <ProtectedRoute>
                <PDFSummarizer />
              </ProtectedRoute>
            }
          />
          <Route
            path="/writer"
            element={
              <ProtectedRoute>
                <AIWriter />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
