import RobustaBean from "../../../assets/Order/robustaProduct.png";

function RobustaPreview() {
    const shadowClass = {
        filter: "drop-shadow(0 8px 1rem rgb(60, 42, 33))"
    };
  return (
    <div className="bg-transparent mb-4 flex-col justify-center">
      <p className="text-2xl font-bold bg-transparent opacity-85">Robusta Coffee Bean</p>
      <img
        src={RobustaBean}
        alt="Robusta Bean"
        className="bg-transparent w-38 h-48 rotate-90 drop-shadow-2xl ml-10 opacity-95"
        style={shadowClass}
      />
    </div>
  );
}

export default RobustaPreview;
