import { useContext, useEffect, useState } from "react";
import "./Main.css"
import { ToggleContext } from "../../Utils/ToggleContext";
import {YOUTUBE_VIDEOS_API} from "../../Utils/ApiKey";
import axios from "axios";
import VideoCard from "./VideoCard";

const Main = () =>{
    const{isSidebaropen}= useContext(ToggleContext);
    const [videos,setVideos] = useState();

    useEffect(()=>{
        getdata();
    },[])

    const getdata = async()=>{
        const data = await axios(YOUTUBE_VIDEOS_API);
        console.log(data.data.items);
        setVideos(data.data.items);
    }

    return(
        <div className="main-container" style={{marginLeft: isSidebaropen ? "280px":"0px" }}>
            {
                videos?.map((info)=>(
                    <VideoCard info={info} key={info.id}/>
                ))
            }
        </div>
    )
}

export default Main;