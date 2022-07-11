import logo from './logo.svg';
import './App.css';
import {ToastContainer} from "react-toastify";
import {Route, Routes} from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";


function App() {
  return (
      <>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </>
  );
}

export default App;
