import './index.css';
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Nav from "./components/Nav";
import PortFolio from "./pages/PortFolio";
import PortFolioItem from './pages/PortfolioItem';



function App() {
  return (
    <>
        <Nav />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/portfolio" element={<PortFolio />}>
            </Route>
                <Route path="/portfolioitem/:ItemId" element={<PortFolioItem />} />
            <Route path="*" element={<Navigate to="/" />} />

        </Routes>
    </>
);
}

export default App;
