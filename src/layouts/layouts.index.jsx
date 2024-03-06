import { Outlet } from "react-router-dom"
import Footer from "../components/footer/footer"
import Header from "../components/header/header"
import './layouts.css'
const Layout = () => {
    return(

        <div>
            <Header/>
            <div id="maincontainer">
                <div id="outletcontainer">
                <Outlet/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Layout
