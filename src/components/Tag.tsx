import React from "react";

const styles = {
  verb: {
    background: "bg-yellow-300",
    border: "border-gray-200",
    text: "text-gray-800",
  },
  article: {
    background: "bg-blue-600",
    border: "bg-blue-600",
    text: "text-white",
  },
  book: {
    background: "bg-yellow-300",
    border: "border-gray-200",
    text: "text-gray-800",
  },
  video: {
    background: "bg-yellow-300",
    border: "border-gray-200",
    text: "text-gray-800",
  },
  exercises: {
    background: "bg-purple-300",
    border: "bg-purple-300",
    text: "text-gray-800",
  },
};

type Props = {
  type: "verb" | "article" | "book" | "video" | "exercises";
  text: string;
};

const Tag: React.FC<Props> = ({ type, text }) => {
  return (
    <span
      className={`inline-flex items-center py-1 px-2 rounded-lg text-sm font-bold ${styles[type].background} ${styles[type].border} ${styles[type].text}`}
    >
      {text}
    </span>
  );
};

export default Tag;
