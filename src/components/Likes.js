function Likes({ likesSet, setLikes, dislikesSet, setDislikes }) {
   return (
      <>
         <button
            onClick={() => setLikes(likesSet + 1)}
         >{`👍 ${likesSet}`}</button>
         <button
            onClick={() => setDislikes(dislikesSet + 1)}
         >{`👎 ${dislikesSet}`}</button>
      </>
   );
}

export default Likes;
