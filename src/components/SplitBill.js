import React from "react";

function SplitBill({
  selectedFriend,
  setselectedFriend,
  payer,
  setPayer,
  handleSplitBill,
  billValue,
  setBillValue,
  yourExpense,
  setYourExpense,
}) {
  const SetBill = (e) => {
    setBillValue(+e.target.value);
  };

  const SetYourExpense = (e) => {
    if (+e.target.value > billValue) {
      alert("Your expense cannot be greater than bill value");
      return;
    }
    setYourExpense(+e.target.value);
  };
  const friendExpense = billValue ? billValue - yourExpense : "";

  return (
    <form className="form-split-bill">
      <h2>Split Bill</h2>
      <label>🧾Bill Value</label>
      <input type="number" value={billValue} min={0} onChange={SetBill} />
      <label>🫵Your Expense</label>
      <input
        type="number"
        value={yourExpense}
        min={0}
        onChange={SetYourExpense}
      />
      <label>🧘‍♂️ {selectedFriend.name}'s Expense</label>
      <input type="number" disabled value={friendExpense} />
      <label>💵 Who is paying the bill</label>
      <select onChange={(e) => setPayer(e.target.value)} defaultValue={payer}>
        <option value="you">You</option>
        <option value={selectedFriend.name}>{selectedFriend.name}</option>
      </select>
      <button
        className="button"
        onClick={(e) => {
          e.preventDefault();
          if (billValue == 0 || billValue == "") {
            alert("bill can not be 0");
          } else {
            handleSplitBill(payer, yourExpense, friendExpense, billValue);
            setselectedFriend(null);
          }
        }}
      >
        Split the bill
      </button>
    </form>
  );
}

export default SplitBill;
