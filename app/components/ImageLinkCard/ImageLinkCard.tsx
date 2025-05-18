import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface ImageLinkCardProps {
  imageSrc: string;
  imageAlt: string;
  linkUrl: string;
  width?: number;
  height?: number;
}

const DEFAULT_WIDTH = 200;
const DEFAULT_HEIGHT = 120;

const ImageLinkCard: React.FC<ImageLinkCardProps> = ({
  imageSrc,
  imageAlt,
  linkUrl,
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
}) => {
  return (
    <div
      className="relative flex justify-center items-center rounded-lg group transition-all duration-500 ease-in-out overflow-hidden"
      style={{ width, height }}
    >
      <Link href={linkUrl} className="block w-full h-full">
        <div className="absolute inset-0 bg-default-blue opacity-0 group-hover:opacity-90 transition-opacity duration-500 z-10 flex items-center justify-center">
          <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 text-center px-4">
            {imageAlt}
          </span>
        </div>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={width}
          height={height}
          className="rounded-lg w-full h-full object-cover overflow-hidden transition-opacity duration-500 group-hover:opacity-60"
          style={{ width: "100%", height: "100%" }}
        />
      </Link>
    </div>
  );
};

export default ImageLinkCard;
