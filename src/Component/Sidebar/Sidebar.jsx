import { useContext } from "react";
import "./sidebar.css";
import { ToggleContext } from "../../Utils/ToggleContext";



const Sidebar = () => {
    const { isSidebaropen } = useContext(ToggleContext);
    return (isSidebaropen &&
        <div className="sidebar-container">
            <div className="firstrow rows">
                <span className="links">
                    Home
                </span>
                <span className="links">
                    Shorts
                </span>
                <span className="links">
                    Subscriptions
                </span>
            </div>


            <div className="secondrow rows">
                <span className="links">
                    History
                </span>
                <span className="links">
                    Your Channel
                </span>
                <span className="links">
                    Your Videos
                </span>
                <span className="links">
                    Watch Later
                </span>
                <span className="links">
                    Liked Videos
                </span>
            </div>

            <div className="thirdrow rows">
                <span className="links">
                    Trending
                </span>
                <span className="links">
                    Music
                </span>
                <span className="links">
                    Movies
                </span>
                <span className="links">
                    Live
                </span>
                <span className="links">
                    Gaming
                </span>
            </div>
        </div>
    )
}

export default Sidebar;