import React, { JSX } from "react";

type Props = {
  children?: string | JSX.Element | JSX.Element[];
};

const TableHeader: React.FC<Props> = ({ children }) => {
  return (
    <th
      scope="col"
      className="px-4 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
    >
      {children}
    </th>
  );
};

export default TableHeader;
