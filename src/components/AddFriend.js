import React from "react";

function AddFriend({
  onAddFriend,
  selectedFriend,
  friendListStatus,
  toggleFriendList,
  handleSelection,
  setPayer,
}) {
  const [name, setName] = React.useState("");
  const [image, setImage] = React.useState("https://i.pravatar.cc/48");

  function handleAddFriend(e) {
    e.preventDefault();
    if (name == "") {
      alert("Please enter a name");
      return;
    }
    if (name != "") {
      toggleFriendList();
      const id = crypto.randomUUID();

      const newFriend = {
        // id: Math.floor(Math.random() * 1000000),
        id,
        name,
        image: image || `https://i.pravatar.cc/${id}`,
        balance: 0,
      };

      onAddFriend(newFriend);

      setName("");
      setImage("https://i.pravatar.cc/48");
      setPayer("you");
    }
  }

  return (
    <>
      {!selectedFriend && friendListStatus && (
        <form className="form-add-friend">
          <label>👥friend name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>🎆ImageUrl</label>
          <input
            type="text"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <button
            className="button"
            onClick={(e) => {
              handleAddFriend(e);
            }}
          >
            Add
          </button>
        </form>
      )}
      <button
        className="button"
        onClick={() => {
          toggleFriendList();
          handleSelection(null);
        }}
      >
        {selectedFriend
          ? "Add Friend"
          : friendListStatus
          ? "Close"
          : "Add Friend"}
      </button>
    </>
  );
}

export default AddFriend;
