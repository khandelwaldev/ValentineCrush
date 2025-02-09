import Link from "next/link";
import React, { useState } from "react";

const Home = () => {
  const [question, setQuestion] = useState("Will you be my Valentine?");
  const [noClickCount, setNoClickCount] = useState(0);
  const [showNo, setShowNo] = useState(true);
  const noMessages = [
    "Think again!",
    "If you say no, my heart might need CPR!",
    "You're playing hard to get, and I'm loving it!",
    "Breaking hearts should be illegal, you know!",
    "Are you sure? I'm irresistible!",
    "You're breaking my heart!",
    "I promise I'm the one for you!",
    "Last chance, don't say no!",
    "My heart can't take another no!",
    "You're testing my patience, cutie!",
    "Come on, say yes!",
  ];

  const handleYesClick = () => {
    setQuestion("I can't believe you said yes!");
    setShowNo(false);
  };

  const handleNoClick = () => {
    if (noClickCount < noMessages.length) {
      setQuestion(noMessages[noClickCount]);
      setNoClickCount(noClickCount + 1);
    }
    if (noClickCount >= 11) {
      setShowNo(false);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white mb-6">{question}</h1>
        <div className="space-x-4 flex w-full justify-center">
          {showNo ? (
            <button
              onClick={handleYesClick}
              className="w-[130px] h-[40px] flex items-center justify-center border-2 border-white text-white text-lg font-bold rounded-2xl"
            >
              Yes 😀
            </button>
          ) : (
            ""
          )}
          {showNo && (
            <button
              onClick={handleNoClick}
              style={{ transform: `scale(${1 - noClickCount * 0.08})` }}
              className="w-[130px] h-[40px] flex items-center justify-center border-2 border-white text-white text-lg font-bold rounded-2xl"
            >
              No 😏
            </button>
          )}
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          {showNo ? (
            ""
          ) : (
            <>
              <img
                src="https://media.tenor.com/QbsVdi4RPTUAAAAi/cat-cute.gif"
                className="w-[200px] h-auto"
              />
              <Link
                href={`https://ig.me/m/_dkk17`}
                target="_blank"
                className="w-[80%] mt-3 h-[45px] flex items-center justify-center border-2 border-white rounded-xl text-white text-lg font-medium"
              >
                Let&apos;s Chat 😋
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
