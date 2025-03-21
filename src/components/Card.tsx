import React, { JSX } from "react";
import Tag from "./Tag";

type Props = {
  title: string;
  tag: string;
  children: string | JSX.Element | JSX.Element[];
};

const Card: React.FC<Props> = ({ title, tag, children }) => {
  return (
    <div className="max-w-2xl px-2 md:px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="flex flex-row mt-2">
        <a
          href="#"
          className="flex-1 text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
          role="link"
        >
          {title}
        </a>
        <Tag type="verb" text={tag} />
      </div>
      {children}
    </div>
  );
};

export default Card;
