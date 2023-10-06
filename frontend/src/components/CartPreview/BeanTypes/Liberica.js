import LibericaBean from "../../../assets/Order/libericaProduct.png";

function LibericaPreview() {
    const shadowClass = {
        filter: "drop-shadow(0 8px 1rem rgb(60, 42, 33))"
    };
  return (
    <div className="bg-transparent mb-4 flex-col justify-center">
      <p className="text-2xl font-bold bg-transparent opacity-85">Liberica Coffee Bean</p>
      <img
        src={LibericaBean}
        alt="Liberica Bean"
        className="bg-transparent w-38 h-48 rotate-90 drop-shadow-2xl ml-14 opacity-95"
        style={shadowClass}
      />
    </div>
  );
}

export default LibericaPreview;
