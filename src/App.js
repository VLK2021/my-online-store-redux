import {Route, Routes, useParams} from "react-router-dom";

import ProductsListPage from "./pages/ProductsListPage/ProductsListPage";
import Layout from "./Layout/Layout";
import SearchComponentPage from "./pages/SearchComponentPage/SearchComponentPage";
import './App.css';


function App() {

    const url = useParams();

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<ProductsListPage/>}/>
                    {/*<Route path={`/products?_page=:page&_limit=9&q=:${url}`.concat(`&q=:word`)} element={<SearchComponentPage/>}/>*/}
                    <Route path={`/search/:word`} element={<SearchComponentPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
