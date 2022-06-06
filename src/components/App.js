import { useState } from 'react';
import video from '../data/video.js';
import Likes from './Likes';
import Comments from './Comments';

function App() {
   const [likesSet, setLikes] = useState(video.upvotes);
   const [dislikesSet, setDislikes] = useState(video.downvotes);
   const [showCommentsSet, setShowComments] = useState(true);

   return (
      <div className="App">
         <iframe
            width="919"
            height="525"
            src={video.embedUrl}
            frameborder="0"
            allowfullscreen
            title="Thinking in React"
         />
         <h1>{video.title}</h1>
         <h2>
            {video.views} Views | Uploaded {video.createdAt}
         </h2>
         <Likes
            likesSet={likesSet}
            setLikes={setLikes}
            dislikesSet={dislikesSet}
            setDislikes={setDislikes}
         />
         <br />
         <br />
         <Comments
            showCommentsSet={showCommentsSet}
            setShowComments={setShowComments}
            comments={video.comments}
         />
      </div>
   );
}

export default App;
