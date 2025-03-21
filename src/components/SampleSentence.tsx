import React from "react";

type WordBlock = {
  type: "normal" | "highlight";
  text: string;
};

type Props = {
  portuguese: WordBlock[];
  english: WordBlock[];
};

const convertWordBlockToTsx = (wordBlocks: WordBlock[]) =>
  wordBlocks.map((wordBlock: WordBlock) =>
    wordBlock.type === "highlight" ? (
      <span className="text-orange-400">{wordBlock.text}</span>
    ) : (
      <span>{wordBlock.text}</span>
    )
  );

const SampleSentence: React.FC<Props> = ({ portuguese, english }) => {
  return (
    <div className="flex flex-row py-4">
      <div className="flex flex-col gap-2 px-8 py-2 justify-center items-center bg-stone-100 border-1 border-gray-400 rounded-lg">
        <div className="text-lg font-bold">
          {convertWordBlockToTsx(portuguese)}
        </div>
        <div>{convertWordBlockToTsx(english)}</div>
      </div>
    </div>
  );
};

export default SampleSentence;
