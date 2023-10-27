import Image, { ImageProps } from "next/image";

interface ImageWithBorderProps extends ImageProps {}

export default function ImageWithBorder({
  src,
  alt,
  ...props
}: ImageWithBorderProps) {
  return (
    <div className="bg-secondary-100 p-6">
      <Image src={src} alt={alt} {...props} />
    </div>
  );
}
