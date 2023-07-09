import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../components/layout/Navbar"
import { Commit } from "../pages/Commit";
import { Home } from "../pages/Home";

export const TransbankRouter = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="home" element={<Home />} />
                <Route path="commit" element={<Commit />} />
                <Route path="/" element={<Navigate to="/home" />} />
            </Routes>
    </>
    )
}