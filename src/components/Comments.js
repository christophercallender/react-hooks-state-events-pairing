function Comments({ showCommentsSet, setShowComments, comments }) {
   return (
      <>
         <button onClick={() => setShowComments(!showCommentsSet)}>
            {showCommentsSet ? 'Hide Comments' : 'Show Comments'}
         </button>
         {showCommentsSet ? (
            <>
               <h2>{`${comments.length} Comments`}</h2>
               {comments.map((comment) => {
                  return (
                     <>
                        <strong>{comment.user}</strong>
                        <p>{comment.comment}</p>
                     </>
                  );
               })}
            </>
         ) : null}
      </>
   );
}

export default Comments;
