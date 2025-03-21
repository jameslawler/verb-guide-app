import classNames from "classnames";
import React from "react";

type Props = {
  title: string;
  index: number;
  isSelectedTab: boolean;
  setSelectedTab: (index: number) => void;
};

const TabTitle: React.FC<Props> = ({
  title,
  setSelectedTab,
  index,
  isSelectedTab,
}) => {
  const classes = classNames(
    "inline-flex items-center h-10 px-2 md:px-4 -mb-px text-sm text-center bg-transparent border-b-2 sm:text-base whitespace-nowrap focus:outline-none hover:cursor-pointer",
    {
      "text-blue-600 border-blue-500 dark:border-blue-400 dark:text-blue-300":
        isSelectedTab,
      "text-gray-700 border-transparent dark:text-white cursor-base hover:border-gray-400":
        !isSelectedTab,
    }
  );

  return (
    <li className={classes}>
      <button
        className="hover:cursor-pointer"
        onClick={() => setSelectedTab(index)}
      >
        {title}
      </button>
    </li>
  );
};

export default TabTitle;
