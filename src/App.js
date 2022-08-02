import {Route, Routes} from "react-router-dom";

import ProductsListPage from "./pages/ProductsListPage/ProductsListPage";
import SearchComponentPage from "./pages/SearchComponentPage/SearchComponentPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Layout from "./Layout/Layout";
import './App.css';

function App() {

    return (
        <div>
            <Routes>
                <Route path={''} element={<Layout/>}>
                    <Route index element={<ProductsListPage/>}/>
                    <Route path={`:word`} element={<SearchComponentPage/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;