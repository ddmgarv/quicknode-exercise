import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Expressions } from "./containers/Expressions";
import { Layout } from "./containers/Layout";

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route element={<Expressions />} path="/" />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
