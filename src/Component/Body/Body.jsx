
import { ToggleContextProvider } from "../../Utils/ToggleContext";
import Main from "../Main/Main";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";



const Body = () => {
    return (
        <ToggleContextProvider>
            <div className="body">
                <Navbar />
                <Sidebar />
                <Main/>
            </div>
        </ToggleContextProvider>
    )
}

export default Body;