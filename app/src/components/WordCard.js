import Image from "next/image";
import React, { useState } from "react";
import udlogo from "../Assets/udlogo.svg";
// import ShareModal from "./ShareModal";

function WordCard({ word }) {
  console.log(word);
  function removeSpecialCharacters(str) {
    const sentencePunctuations = /[\.\?\!\:\"\'\:\(\)\,]/;
    return str
      .split("")
      .filter((char) => {
        return char.match(/[a-zA-Z0-9\s]/) || char.match(sentencePunctuations);
      })
      .join("");
  }

  function DisplayTextWithLineBreaks(str) {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: str.replace(/\r\n/g, "<br />") }}
      />
    );
  }

  const [showMore, setShowMore] = useState(false);

  function handleDefinitionClick() {
    setShowMore(!showMore);
  }

  return (
    <div
      className={`border rounded-[16px] mb-4 bg-white w-[350px] h-auto ${
        showMore ? "md:h-auto" : "h-[350px] overflow-hidden"
      }`}
    >
      <div className="px-[16px] py-[16px]">
        <div className="flex justify-between items-center mb-[16px]">
          <h1 className="text-2xl font-bold capitalize">{word?.word}</h1>
          <div className="space-x-4 flex">
            {/* <ShareModal word={word} /> */}

            <button className="rounded-[10px] p-2 bg-black shadow-md hover:scale-110 hover:font-semibold transition-all duration-150 ease-out">
              <a href={word.permalink} target="_blank">
                <Image
                  src={udlogo}
                  className="w-6 h-6"
                  alt="urban dictionary link"
                />
              </a>
            </button>
          </div>
        </div>

        <div
          className={`pb-[32px] text-sm font-semibold leading-loose ${
            showMore ? "h-auto" : "h-[70px] text-ellipsis overflow-hidden"
          }`}
        >
          {DisplayTextWithLineBreaks(removeSpecialCharacters(word?.definition))}
        </div>

        <h2 className="pb-[16px] text-sm font-bold">Example:</h2>
        <div
          className={`text-[#AAAAAA] text-xs font-light leading-loose ${
            showMore ? "h-auto" : "h-[70px] overflow-hidden"
          }`}
        >
          {DisplayTextWithLineBreaks(removeSpecialCharacters(word?.example))}
        </div>

        <div className="w-full text-sm text-right pb-[16px]">
          {!showMore ? (
            <button
              onClick={handleDefinitionClick}
              className="text-blue-500 underline cursor-pointer ml-2"
            >
              See More
            </button>
          ) : (
            <button
              onClick={handleDefinitionClick}
              className="text-blue-500 cursor-pointer ml-2"
            >
              ... see less
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default WordCard;
