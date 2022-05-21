import {Route, Routes} from "react-router-dom";

import ProductsList from "./components/ProductsList/ProductsList";
import Layout from "./components/Layout/Layout";
import './App.css';


function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<ProductsList/>}/>

                </Route>

            </Routes>
        </div>
    );
}

export default App;
