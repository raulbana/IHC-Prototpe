import React from "react";
import NewsItem, { NewsItemProps } from "../NewsItem/NewsItem";

export interface NewsListProps {
  newsItems: NewsItemProps[];
}

const NewsList: React.FC<NewsListProps> = ({ newsItems }) => {
  return (
    <div className="space-y-6">
      {newsItems.map((item) => (
        <NewsItem
          key={item.id}
          id={item.id}
          title={item.title}
          date={item.date}
        />
      ))}
    </div>
  );
};

export default NewsList;
