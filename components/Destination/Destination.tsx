import { FC } from "react";
import Image from "next/image";
interface DestinationProps {
  image?: string | any;
  text: string;
  amount: string;
  days: string;
}

const Destination: FC<DestinationProps> = ({ image, text, amount, days }) => {
  return (
    <div className="border-1px w-[100%]">
      <div className="rounded-t-[1rem] h-[200px] w-[100%] bg-gray-100 overflow-hidden">
        <Image
          src={image}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          alt={text}
        />
      </div>
      <div className="flex py-[0.5rem] md:py-[1rem]">
        <h1 className="capitalize">{text}</h1>
        <span className="ml-auto" aria-label="cost of trip">
          ${amount}k
        </span>
      </div>
      <div className="flex items-center">
        <span className="block">
          <Image src="/send.png" width={20} height={20} alt="aeroplane" />
        </span>
        <span className="ml-[1rem]">{days} Days Trip</span>
      </div>
    </div>
  );
};
export default Destination;
