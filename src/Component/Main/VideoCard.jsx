

const VideoCard = ({info}) => {
    const {snippet,statistics} = info;

    const formatNumber = (number) => {
        if (number < 1000) {
          return number.toString(); // No need to format
        } else if (number < 1000000) {
          return (number / 1000).toFixed(1) + 'K'; // Convert to thousands
        } else if (number < 1000000000) {
          return (number / 1000000).toFixed(2) + 'M'; // Convert to millions
        } else {
          return (number / 1000000000).toFixed(2) + 'B'; // Convert to billions
        }
    };

    return (
        <div className="youtube-cards">
            <div className="thumbnail-container">
                <img src={snippet?.thumbnails?.high?.url} alt="" />
            </div>
            <div className="video-details-container">
                <div className="video-details">
                    <span className="video-name">
                        {snippet?.title}
                        
                    </span>
                    <span className="channel-name">
                        {snippet?.channelTitle}
                    </span>
                    <span className="views-count">
                        {formatNumber(statistics?.viewCount)} Views
                    </span>
                </div>
            </div>
        </div>
    )
}
export default VideoCard;