import { Route, Routes } from "react-router-dom";
import Blue from './Blue';
import Red from './Red';
import Home from './Home';
import Black from "./Black";
import Purple from "./Purple";
export default function MainSection() { 
    return (
        <div className="main-section">
            <Routes>
                <Route path="/purple"element={<Purple/>}/>
                <Route path="/black" element={<Black/>} />
                <Route path="/blue" element={<Blue/>} />
                <Route path="/red" element={<Red/>} />
                <Route path="/" element={<Home/>} />
            </Routes>
        </div>
    );
}