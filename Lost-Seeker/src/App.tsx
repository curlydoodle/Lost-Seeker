import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "./components/pages/landing/LandingPage.tsx"
import AuthPage from "./components/pages/auth/AuthPage.tsx"
import ErrorPage from "./components/pages/error/ErrorPage.tsx"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import ListOfItems from "./components/pages/landing/ListOfItems"

const firebaseConfig = {
  apiKey: "AIzaSyB2DxDn0VT7kCGQZKmeXmKmG5zWcM8qHSA",
  authDomain: "lost-seeker.firebaseapp.com",
  projectId: "lost-seeker",
  storageBucket: "lost-seeker.appspot.com",
  messagingSenderId: "727937133568",
  appId: "1:727937133568:web:12028899a4907ffa10fce5",
  measurementId: "G-Z3J14HNCXK",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/register" element={<AuthPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
