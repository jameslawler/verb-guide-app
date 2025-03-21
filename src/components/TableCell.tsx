import React, { JSX } from "react";

type Props = {
  children?: string | JSX.Element | JSX.Element[];
};

const TableCell: React.FC<Props> = ({ children }) => {
  return (
    <td className="w-1/4 px-4 py-2 text-sm font-medium text-gray-800 dark:text-neutral-200">
      {children}
    </td>
  );
};

export default TableCell;
