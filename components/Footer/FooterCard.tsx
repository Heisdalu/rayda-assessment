interface FooterCardProps {
  title: string;
  list: string[];
}

const FooterCard = ({ title, list }: FooterCardProps) => {
  return (
    <div className="space-y-[0.5rem]">
      <h1 className="text-black text-[1.1rem] font-[600]">{title}</h1>
      <div className="flex flex-col space-y-[0.5rem]">
        {list.map((el, i) => (
          <a key={i} href="" className="hover:text-gray-400">
            {el}
          </a>
        ))}
      </div>
    </div>
  );
};
export default FooterCard;
