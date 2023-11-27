import { ReactNode } from "react";

const Wrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`${className} px-[1rem] md:px-[2rem] lg:px-[4rem] lg:max-w-[1700px] lg:mx-auto`}
    >
      {children}
    </div>
  );
};
export default Wrapper;
