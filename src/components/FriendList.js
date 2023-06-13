import React from "react";

function FriendList({
  friends,
  onSelection,
  selectedFriend,
  handleSplitBill,
  setselectedFriend,
}) {
  return (
    <ul className="friendlist">
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
          handleSplitBill={handleSplitBill}
          setselectedFriend={setselectedFriend}
        />
      ))}
    </ul>
  );
}

function Friend({
  friend,
  onSelection,
  selectedFriend,
  handleSplitBill,
  setselectedFriend,
}) {
  return (
    <li className="friend">
      <img src={friend.image} alt={friend.name} />
      <h3 className="friend-name">{friend.name}</h3>
      <>
        {friend.balance < 0 && (
          <p className="red">
            {friend.name} senden {Math.abs(friend.balance)}₺ alacaklı.
          </p>
        )}
        {friend.balance > 0 && (
          <p className="green">
            {friend.name} sana {Math.abs(friend.balance)}₺ borçlu
          </p>
        )}
        {friend.balance === 0 && <p className="gray">Ödeştiniz </p>}

        <button
          className="button"
          onClick={() => {
            onSelection(friend);
            handleSplitBill("you", 0, 0, 0);
            setselectedFriend(null);
            setselectedFriend(friend);
          }}
        >
          {selectedFriend?.id == friend.id ? "Close" : "Select"}
        </button>
      </>
    </li>
  );
}

export default FriendList;
