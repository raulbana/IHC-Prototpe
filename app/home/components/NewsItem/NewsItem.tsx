import Link from "next/link";
import React from "react";

export interface NewsItemProps {
  id: number;
  title: string;
  date: string;
}

const NewsItem: React.FC<NewsItemProps> = ({ id, title, date }) => {
  return (
    <article key={id} className="border-l-4 border-blue-600 pl-4">
      <h3 className="text-xl font-medium hover:text-blue-600 transition-colors">
        <Link href={`/editais/${id}`}>{title}</Link>
      </h3>
      <time className="block text-sm text-gray-500 mt-1">{date}</time>
      <p className="mt-2 text-gray-700">
        A Superintendência de Educação a Distância e Inovações Pedagógicas
        (SEaDIP) …
      </p>
    </article>
  );
};

export default NewsItem;
