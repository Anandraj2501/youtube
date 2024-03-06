import { useContext, useEffect, useState } from "react";
import "./Main.css"
import { ToggleContext } from "../../Utils/ToggleContext";
import { YOUTUBE_VIDEOS_API } from "../../Utils/ApiKey";
import axios from "axios";
import VideoCard from "./VideoCard";
import { ShimmerSimpleGallery } from "react-shimmer-effects";
import useOnlineStatus from "../../Utils/useOnlineStatus";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../../Utils/DataSlice";

const Main = () => {
    const { isSidebaropen } = useContext(ToggleContext);
    const [videos, setVideos] = useState([]);
    const isOnline = useOnlineStatus();
    const dispatch = useDispatch();
    const data = useSelector((state) => state.add);
    useEffect(() => {
        if (!isOnline) {
            alert("You are Offline");
            return;
        }
    }, [isOnline])

    useEffect(() => {
        if (data.length !== 0) {
            setVideos(data[0]);
        }
        else {
            getdata();
        }
    }, [])

    const getdata = async () => {
        try {
            const data = await axios(YOUTUBE_VIDEOS_API);
            setVideos(data.data.items);
            dispatch(addData(data.data.items));
        }catch(error){
            console.log(error);
        }
    }

    return (
        <div className="main-container" style={{ marginLeft: isSidebaropen ? "280px" : "0px" }}>

            {(!isOnline || videos.length === 0) ?
                (<>
                    <ShimmerSimpleGallery card imageHeight={300} caption />
                </>
                ) :
                (videos?.map((info) => (
                    <Link key={info.id} to={`/watchpage/${info.id}`} style={{ textDecoration: "none", listStyleType: "none", display: "contents" }}>
                        <VideoCard info={info} key={info.id} />
                    </Link>
                )))
            }
        </div>
    )
}

export default Main;