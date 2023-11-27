const HowToBook = ({
  color,
  title,
  text,
}: {
  color: string;
  title: string;
  text: string;
}) => {
  const colorGroup =
    color === "y"
      ? "bg-yellow-300"
      : color === "g"
      ? "bg-green-600"
      : "bg-blue-400";
  return (
    <div className="[grid-gap:1rem] grid [grid-template-columns:50px_1fr]">
      <span className={`flex justify-center items-center rounded-[1rem] h-[50px] ${colorGroup}`}>
        <span className="rounded-[0.5rem] block h-[20px] w-[20px] border-1 border-white"></span>
      </span>
      <div className="text-left space-y-[5px]">
        <h1 className="text-[1.2rem] md:text-[1.3rem] font-[600]">{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};
export default HowToBook;
