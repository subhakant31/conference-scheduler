import "./App.scss";
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventSchedulePage from "./pages/EventSchedulePage";
import CodeOfConductPage from "./pages/CodeOfConductPage";
import LocationInfoPage from "./pages/LocationInfoPage";
import FoodInfoPage from "./pages/FoodInfoPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
function App() {

  

  return (
    <React.Fragment>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/event-schedule" element={<EventSchedulePage />} />
        <Route path="/code-of-conduct" element={<CodeOfConductPage />} />
        <Route path="/location-info" element={<LocationInfoPage />} />
        <Route path="/food-info" element={<FoodInfoPage />} />
      </Routes>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
