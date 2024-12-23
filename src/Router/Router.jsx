import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GardanComposting from '../Page/GardanComposting'
import Home from '../Component/Home'
import WaterSaving from '../Page/WaterSaving'
import Gardening from '../Page/Gardening'
import Brands from '../Page/Brands'
import FoodWasteCom from '../Page/FoodWasteCom'

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/composting" element={<GardanComposting />} />
            <Route path="/watersaving" element={<WaterSaving />} />
            <Route path="/gardening" element={<Gardening />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/foodwastecomposting" element={<FoodWasteCom />} />
        </Routes>
    )
}
