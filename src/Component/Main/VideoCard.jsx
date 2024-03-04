

const VideoCard = ({info}) => {
    console.log(info);
    const {snippet,statistics} = info;
    return (
        <div className="youtube-cards">
            <div className="thumbnail-container">
                <img src={snippet.thumbnails.high.url} alt="" />
            </div>
            <div className="video-details-container">
                <div>
                    <span>
                        Logo
                    </span>
                </div>
                <div className="video-details">
                    <span className="video-name">
                        {snippet.title}
                        
                    </span>
                    <span className="channel-name">
                        {snippet.channelTitle}
                    </span>
                    <span className="views-count">
                        {Math.ceil(statistics.viewCount/1000)}k Views
                    </span>
                </div>
            </div>
        </div>
    )
}
export default VideoCard;