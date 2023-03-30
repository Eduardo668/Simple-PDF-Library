import { Route, Routes } from "react-router-dom"
import Account from "./pages/account-page/Account";
import MyFiles from "./pages/files-page/MyFiles";
import Home from "./pages/home-page/Home";
import Login from "./pages/login-page/Login";
import Read from "./pages/read-page/Read";
import Register from "./pages/register-page/Register";



function Navigation(){
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
            <Route path="/myfiles" element={<MyFiles />} />
            <Route path="/account" element={<Account />} />
            <Route path="/read" element={<Read />} />
        </Routes>
    )


}
 
export default Navigation;