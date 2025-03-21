import React, { ReactElement, useState } from "react";
import TabTitle from "./TabTitle";

type Props = {
  children: ReactElement<{ title: string }>[];
};

const Tabs: React.FC<Props> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div>
      <ul className="flex overflow-x-auto overflow-y-hidden border-b border-gray-200 dark:border-gray-700">
        {children.map((item, index) => (
          <TabTitle
            key={index}
            title={item.props.title}
            index={index}
            isSelectedTab={selectedTab === index}
            setSelectedTab={setSelectedTab}
          />
        ))}
      </ul>
      <div className="p-2 md:p-4">{children[selectedTab]}</div>
    </div>
  );
};

export default Tabs;
