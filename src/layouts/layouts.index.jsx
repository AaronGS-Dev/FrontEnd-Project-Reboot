import { Outlet } from "react-router-dom"
// import Footer from "../components/footer/footer"
import Header from "../components/header/header"
const Layout = () => {
    return(

        <div>
            <Header/>
            <div>
            <Outlet/>
            </div>
            {/* <Footer/> */}
        </div>
    )
}
export default Layout
