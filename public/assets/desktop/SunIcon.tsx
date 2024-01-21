import Image from "next/image";

type SunProp = {
    onClick: () => void;
};

const SunIcon = ({ onClick }: SunProp) => {
  return (
    <Image
      src={"/assets/desktop/sun.svg"}
      alt="Moon icon"
      width={5}
      height={5}
      className="w-10 h-10 hover:cursor-pointer"
      onClick={onClick}
    />
  );
};

export default SunIcon;
