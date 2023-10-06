import React from "react";

function EmptyCart() {
  const customTextStyle = {
    color: "rgba(61, 43, 33, 0.5)",
    fontSize: "1.3rem",
    fontWeight: "bold",
  };

  return (
    <div className="text-xl bg-transparent mb-4 w-5/12 flex justify-center" style={customTextStyle}>
      Nothing selected yet. Select and customize your order by selecting the
      fields on the left side to see order preview.
    </div>
  );
}

export default EmptyCart;
