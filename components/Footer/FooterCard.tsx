interface FooterCardProps {
  title: string;
  list: string[];
}

const FooterCard = ({ title, list }: FooterCardProps) => {
  return (
    <div className="space-y-[0.5rem]">
      <h1 className="text-black text-[1.1rem] font-[600]">{title}</h1>
      <div className="flex flex-col space-y-[0.5rem]">
        <a href="">About</a>
        <a href="">Careers</a>
        <a href="">Mobile</a>
      </div>
    </div>
  );
};
export default FooterCard;
