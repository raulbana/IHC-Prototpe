import ImageLinkCard, {
  ImageLinkCardProps,
} from "@/app/components/ImageLinkCard/ImageLinkCard";
import React from "react";

export interface ImageCardsSectionProps {
  cards: ImageLinkCardProps[];
}

const ImageCardsSection: React.FC<ImageCardsSectionProps> = ({ cards }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4">
      <div
        className="grid gap-4 w-full md:grid-cols-2 lg:grid-cols-3"
        style={{ justifyItems: "center" }}
      >
        {cards.map((card) => (
          <div
            key={card.imageAlt + card.linkUrl}
            className="w-full"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ImageLinkCard
              imageSrc={card.imageSrc}
              imageAlt={card.imageAlt}
              linkUrl={card.linkUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCardsSection;
