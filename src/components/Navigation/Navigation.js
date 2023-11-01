import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import List from "../List/List";
import AddItem from "../AddItem/AddItem";

const Navigation = () => {
    return(
        <>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<List/>}/>
                    <Route path="/create" element={<AddItem/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Navigation;