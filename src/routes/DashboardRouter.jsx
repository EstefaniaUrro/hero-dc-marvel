import React from 'react'
import { Routes, Route } from "react-router-dom";
import DcScreen from '../Components/dc/DcScreen';
import HeroScreen from '../Components/heroes/HeroScreen';
import MarvelScreen from '../Components/marvel/MarvelScreen';
import SearchScreen from '../Components/search/SearchScreen';
import Navbar from '../Components/ui/Navbar';

const DashboardRouter = () => {
    return (
        <>
        <Navbar/>
        <div className="container mt-5">
        <Routes>
            <Route path="dc" element={<DcScreen/>} />
            <Route path="marvel" element={<MarvelScreen/>} />
            <Route path="search" element={<SearchScreen/>} />
            <Route path="hero/:heroId" element={<HeroScreen/>} />
            <Route path="/" element={<MarvelScreen/>} />
        </Routes>
        </div>
        </>

    )
}

export default DashboardRouter
