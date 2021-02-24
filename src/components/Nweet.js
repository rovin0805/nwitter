import React from "react";
import { dbService } from "fbInstance";

const Nweet = ({ nweetObj, isOwner }) => {
  const onDeleteClick = async () => {
    const ok = window.confirm("Are you sure you want to delete this nweet?");
    if (ok) {
      await dbService.doc(`nweets/${nweetObj.id}`).delete();
    }
  };

  return (
    <div>
      <h4 key={nweetObj.id}>{nweetObj.text}</h4>
      {isOwner && (
        <>
          <button onClick={onDeleteClick}>Delete</button>
          <button>Edit</button>
        </>
      )}
    </div>
  );
};

export default Nweet;
