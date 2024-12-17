import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useSetAtom } from "jotai";
import { currentPageAtom } from "./state/atom";
import Home1 from "./pages/Home1";
import Home2 from "./pages/Home2";

function Layout({ children }) {
	return (
		<>
			{children}
		</>
	);
}

function App() {
	const setCurrentPage = useSetAtom(currentPageAtom);

	const handleRouteChange = (location) => {
		const pageName = location.pathname === "/" ? "Home1" : "Home2";
		setCurrentPage(pageName);
	};

	return (
		<Router basename="/BeautyClinic">
			<Routes>
				<Route path="/" element={<Layout><Home1 /></Layout>} />
				<Route path="/home" element={<Layout><Home2 /></Layout>} />
			</Routes>
		</Router>
	);
}

export default App;
