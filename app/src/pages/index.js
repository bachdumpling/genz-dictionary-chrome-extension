import WordCard from "@/components/WordCard";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { chosenWordState } from "../../atoms/wordAtom";
import Search from "../components/Search";
import logo from "../Assets/logo.svg";
import Image from "next/image";

export default function Home() {
  const [input, setInput] = useState("");
  const [word, setWord] = useRecoilState(chosenWordState);
  const [words, setWords] = useState([]);

  console.log("chosen word:", word);
  console.log(words);

  function displayChosenWord(word) {
    return <WordCard word={word} />;
  }

  return (
    <div className="w-[400px] border min-h-[200px] shadow-lg">
      <div className="flex justify-start items-center border-b-[1px] p-6">
        <Image src={logo} alt="logo" className="w-8 h-10 pr-4" />
        <h1 className="text-lg font-bold">z-define</h1>
      </div>
      <div
        className="relative w-full 
            drop-shadow-md
            rounded-[16px] p-6"
      >
        <Search
          setInput={setInput}
          input={input}
          word={word}
          setWord={setWord}
          words={words}
          setWords={setWords}
        />
        <div className="mt-6">{word && displayChosenWord(word)}</div>

        <p className="text-center text-sm text-[#AAAAAA] mt-6">
          Decode the lingo, speak Gen Z Fluently
        </p>
      </div>
    </div>
  );
}
