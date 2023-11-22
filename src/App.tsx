import { BrowserRouter as Router } from 'react-router-dom';
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import {ToastContainer} from "react-toastify";
import AppRoutes from "./routes/AppRoutes";
import { Container } from "react-bootstrap";
import Loader from "./components/Loader/Loader";
import { Suspense } from "react";



function App() {
  return (
    <>
      <ToastContainer/>
      <Router>
        <Header/>
        <Container style={{minHeight: '100vh', minWidth: '100%', padding:'0'}}>
          <Suspense fallback={<Loader/>}>
            <AppRoutes/>
          </Suspense>
        </Container>


        <Footer/>
      </Router>
    </>
  )
}

export default App
