import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./containers/Layout";

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>{/* <Route element={<Destinations />} path="/Destinations" /> */}</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
