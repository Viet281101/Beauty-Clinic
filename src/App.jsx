import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home1 from "./pages/Home1";
import Home2 from "./pages/Home2";

function App() {
	return (
		<Router basename="/BeautyClinic">
		<Routes>
			<Route path="/" element={<Home1 />} />
			<Route path="/home" element={<Home2 />} />
		</Routes>
		</Router>
	);
}

export default App;
