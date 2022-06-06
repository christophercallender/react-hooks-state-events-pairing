function Comments({ showCommentsSet, setShowComments, comments }) {
   return (
      <>
         <button onClick={() => setShowComments(!showCommentsSet)}>
            {showCommentsSet ? 'Hide Comments' : 'Show Comments'}
         </button>
         {showCommentsSet ? (
            <>
               <h2>{`${comments.length} Comments`}</h2>
               {comments.map(({ user, comment }) => (
                  <>
                     <strong>{user}</strong>
                     <p>{comment}</p>
                  </>
               ))}
            </>
         ) : null}
      </>
   );
}

export default Comments;
