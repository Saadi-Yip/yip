import Image from "next/image";
import useDimensions from "../../../hooks/use-dimensions";

type Props = {
  src: string;
  alt: string;
  sizes: {
    default: [ number,  number];
    mobile: [number,  number];
  };
};
const Img = ({ src, alt, sizes }: Props) => {
  const { width } = useDimensions();

  const dimensions = width >= 600 ? sizes.default : sizes.mobile;

  if (width) {
    return (
      <div
        style={{
          position: "relative",
          width: dimensions[0] + "vw",
          height: dimensions[1] + "vw",
        }}
      >
        <Image src={src} alt={alt} fill/>
      </div>
    );
  }
  return <></>;
};

export default Img;
