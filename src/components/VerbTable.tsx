import React from "react";
import TableCell from "./TableCell";
import TableHeader from "./TableHeader";

type WordBlock = {
  type: "normal" | "highlight";
  text: string;
};

type Verb = {
  infinite: WordBlock[];
  conjugations: {
    [key: string]: WordBlock[];
  };
};

type Props = {
  verbs: Verb[];
};

const pronouns: { [key: string]: WordBlock[] } = {
  one: [{ type: "normal", text: "eu" }],
  two: [{ type: "normal", text: "tu" }],
  three: [{ type: "normal", text: "ele*" }],
  four: [{ type: "normal", text: "nós" }],
  five: [{ type: "normal", text: "eles*" }],
};

const convertWordBlockToTsx = (wordBlocks: WordBlock[]) =>
  wordBlocks.map((wordBlock: WordBlock) =>
    wordBlock.type === "highlight" ? (
      <span className="text-orange-400">{wordBlock.text}</span>
    ) : (
      <span>{wordBlock.text}</span>
    )
  );

const VerbTable: React.FC<Props> = ({ verbs }) => {
  return (
    <table className="table-fixed min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
      <thead>
        <tr>
          <TableHeader />
          {verbs.map((verb) => (
            <TableHeader>{convertWordBlockToTsx(verb.infinite)}</TableHeader>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
        {Object.entries(pronouns).map(([key, value]) => (
          <tr>
            <TableCell>
              <span>{convertWordBlockToTsx(value)}</span>
            </TableCell>
            {verbs.map((verb) => (
              <TableCell>
                {convertWordBlockToTsx(verb.conjugations[key])}
              </TableCell>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default VerbTable;
