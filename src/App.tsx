import {useState} from 'react'
import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {AllDirectors} from "./components/directors/AllDirectors";
import {AppMenu} from "./components/AppMenu";
import {AddDirector} from "./components/directors/AddDirector";
import {DeleteDirector} from "./components/directors/DeleteDirector";
// import {EditCar} from "./components/cars/EditCar";
import {Filter1} from "./components/statistics/Filter1";
import {EditDirector} from "./components/directors/EditDirector";
function App() {
    return (
        <React.Fragment>
			<Router>
				<Routes>
					<Route path="/" element={<AppMenu />} />
					<Route path="/directors/" element={<AllDirectors/>} />'
					<Route path="/directors/add/" element={<AddDirector />} />
					<Route path="/directors/:dirID/edit/" element={<EditDirector />} />
					<Route path="/directors/:dirID/delete/" element={<DeleteDirector />} />
					<Route path="/directors/filter/:input/" element={<Filter1 />} />
				</Routes>
			</Router>
		</React.Fragment>
    )
}

export default App
