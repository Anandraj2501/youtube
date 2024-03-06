import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import "./navbar.css"
import { YOUTUBE_LOGO } from "../../Utils/ImagesLink";
import { useContext, useEffect, useState } from "react";
import { ToggleContext } from "../../Utils/ToggleContext";
import axios from "axios";
import { YOUTUBE_SEARCH_API } from "../../Utils/ApiKey";
import { useDispatch, useSelector } from "react-redux";
import { cacheSearch } from "../../Utils/SearchSlice";


const Navbar = () => {

    const { toggleSidebar } = useContext(ToggleContext);
    const [showSuggestion, setShowSuggestion] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [suggestions, setSuggestions] = useState();
    const SearchCache = useSelector((state) => state.search);
    const dispatch = useDispatch();

    useEffect(() => {

        const timeout = setTimeout(() => {
            if (SearchCache[searchText]) {
                setSuggestions(SearchCache[searchText])
            }
            else {
                getSuggestion();
            }
        }, 200)

        return () => {
            clearTimeout(timeout);
        }
    }, [searchText])

    const getSuggestion = async () => {
        const data = await axios(YOUTUBE_SEARCH_API + searchText);
        setSuggestions(data.data[1]);
        console.log(data.data[1]);
        dispatch(cacheSearch({
            [searchText]: data.data[1]
        }))
    }

    const handleclick = (item) => {
        setSearchText(item);
        setShowSuggestion(false);
    }

    const handleBlur = () => {
        if (!mouseOverSuggestions) {
            setShowSuggestion(false);
        }
    };

    let mouseOverSuggestions = false;

    const handleMouseEnter = () => {
        mouseOverSuggestions = true;
    };

    const handleMouseLeave = () => {
        mouseOverSuggestions = false;
    };

    return (
        <div className="navbar-container">
            <div className="hamburger">
                <RxHamburgerMenu onClick={() => toggleSidebar()} />
            </div>
            <div className="logo">
                <img src={YOUTUBE_LOGO} alt="logo" className="youtube-logo" />
            </div>
            <div className="searchbar-container">
                <div className="box">
                    <input type="text" placeholder="Search" className="input" value={searchText} onChange={(e) => setSearchText(e.target.value)} onFocus={() => setShowSuggestion(true)} onBlur={handleBlur} />
                    <button className="searchlogo-container"><CiSearch /></button>

                </div >
                {suggestions?.length>0 && <div className="suggestions" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <ul>
                        {
                            suggestions?.map((item) => (
                                <li onClick={() => handleclick(item)}>{item}</li>
                            ))
                        }


                    </ul>
                </div>}
            </div>
            <div className="userlogo">
                <CiUser />
            </div>
        </div>
    )
}

export default Navbar;