import Image from "next/image";

type MoonProp = {
    onClick: () => void;
}

const MoonIcon = ({ onClick }: MoonProp) => {
  return (
    <Image
      src={"/assets/desktop/moon.svg"}
      alt="Moon icon"
      width={5}
      height={5}
      className="w-10 h-10 hover:cursor-pointer"
      onClick={onClick}
    />
  );
};

export default MoonIcon;
