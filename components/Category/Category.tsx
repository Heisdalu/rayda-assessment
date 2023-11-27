import { title } from "process";
import { FC } from "react";
import Image from "next/image";

interface CategoryProps {
  image?: string | any;
  title: string;
  text: string;
}

const Category: FC<CategoryProps> = ({ title, text, image }) => {
  return (
    <div>
      <div className="h-[200px] w-[100%] bg-green-40 flex justify-center items-center ">
        <Image src={image} width={100} height={100} alt="aeroplane" />
      </div>
      <div className="text-center">
        <h1 className="capitalize">{title}</h1>
        <p className="capitalize mt-[0.5rem]">{text}</p>
      </div>
    </div>
  );
};

export default Category;
