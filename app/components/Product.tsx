"use client";
import { Button, Skeleton } from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import processText from "../api/utility";
import { toast } from "react-toastify";

const Product = () => {
  const [showProcessTextResult, setShowProcessTextResult] = useState(false);
  const [showDetectAIResult, setShowDetectAIResult] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [aiDetection, setAIDetection] = useState({
    detected: false, // To track if AI was detected
    confidence: 50, // Assuming a confidence level percentage
  });

  const [processedText, setProcessedText] = useState("");
  const [textInput, setTextInput] = useState("");
  const [displayedText, setDisplayedText] = useState("");

  const typewriterEffect = async (text: string) => {
    for (let i = 0; i <= text.length; i++) {
      setDisplayedText(text.substring(0, i));
      await new Promise((resolve) => setTimeout(resolve, 50)); // Adjust speed here
    }
  };

  const handleProcessTextClick = async () => {
    setIsLoading(true);
    setShowProcessTextResult(false);
    setDisplayedText("");

    try {
      const paraphrased = await processText(textInput); // Pass the textarea input to the API call
      setProcessedText(paraphrased);
      setShowProcessTextResult(true);
      typewriterEffect(paraphrased);
      toast.success("Text processed successfully!"); // Success toast
    } catch (error) {
      console.error("Failed to process text:", error);
      toast.error("Failed to process text. Please try again."); // Error toast
    } finally {
      setIsLoading(false);
    }
  };

  const handleDetectAIClick = () => {
    // setShowDetectAIResult(true);
    // setAIDetection((prev) => {
    //   // assume confidence randomly increases or decreases by 10%
    //   const newConfidence = prev.confidence === 75 ? 50 : 75;
    //   return {
    //     detected: !prev.detected,
    //     confidence: newConfidence,
    //   };
    // });
    alert("AI Detection feature is coming soon!");
  };
  return (
    <section id="products" className="bg-gray-100 mt-4 md:mt-24 py-12">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold text-gray-900">Our Products</h1>
        <p className="mt-2 text-lg p-2 text-gray-500">
          Empowering your writing process and protecting your privacy
        </p>
      </div>

      <div className="justify-center items-center flex">
        <div className="flex flex-col md:flex-row px-4 md:px-32 mt-12 space-y-4 md:space-x-2 md:space-y-0">
          {/* WritingPrivacy section */}
          <div className="flex-1 md:flex md:items-start md:space-x-4">
            <div>
              {/* Icon */}
              <svg
                className="w-6 h-6 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <div>
              {/* Content */}
              <h1 className="text-lg font-medium text-gray-900 mt-2 md:mt-0">
                WritingPrivacy
              </h1>
              <p className="max-w-xl mt-2 text-base text-gray-500">
                WritingPrivacy ensures your writing process remains private. We
                believe that the quality of your work is what truly matters, not
                the tools or methods you use to create it. Whether you use Word,
                Vim, spell checkers, Grammarly, or AI assistants, your creative
                process should be your own. Our tool helps maintain the
                integrity of your work while protecting your writing
                methodology.
              </p>
              <textarea
                placeholder="Enter your text here..."
                className="w-full bg-white border border-gray-300 rounded-md mt-4 p-2"
                rows={4}
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
              />
              <Button
                onClick={handleProcessTextClick}
                className="mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 "
              >
                Process Text
              </Button>

              {isLoading && (
                <div className="w-full bg-white mt-4 p-4 rounded-lg shadow-md">
                  <Skeleton className="h-6 mb-2 w-full" />
                  <Skeleton className="h-6 mb-2 w-3/4" />
                  <Skeleton className="h-6 w-1/2" />
                </div>
              )}

              {showProcessTextResult && !isLoading && (
                <div className="w-full bg-white mt-4 p-4 rounded-lg shadow-md">
                  <h1 className="font-bold">Modified Text:</h1>
                  <animated.p className="text-bold">{displayedText}</animated.p>
                </div>
              )}
            </div>
          </div>

          {/* TextOrigin section */}
          <div className="flex-1 md:flex md:items-start md:space-x-4">
            <div>
              {/* Icon */}
              <svg
                className="w-6 h-6 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <div>
              {/* Content */}
              <h1 className="text-lg font-medium text-gray-900 mt-2 md:mt-0">
                TextOrigin
              </h1>
              <p className="max-w-xl mt-2 text-base text-gray-500">
                TextOrigin is designed to empower users in protecting their
                privacy. It allows you to check the likely source of a text,
                helping you make informed decisions about the content you
                encounter. This tool isn&apos;t about judging the use of AI or
                other writing aids, but about giving you control over your
                information and understanding the nature of the content
                you&apos;re interacting with.
              </p>
              <textarea
                placeholder="Enter your text here..."
                className="w-full bg-white border border-gray-300 rounded-md mt-4 p-2"
                rows={4}
              />
              <Button
                onClick={handleDetectAIClick}
                disabled={true}
                className="mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 "
              >
                Detect AI (Coming Soon)
              </Button>

              {showDetectAIResult && (
                <div className="w-full bg-white mt-4 p-4 rounded-md shadow-md">
                  <h1 className="font-bold">Detection Result:</h1>
                  <p className="mt-2">
                    This text is likely{" "}
                    <span
                      className={
                        aiDetection.detected
                          ? "text-red-600 font-bold"
                          : "text-green-600 font-bold"
                      }
                    >
                      {aiDetection.detected ? "AI-generated" : "Human-written"}
                    </span>
                    .
                  </p>
                  {/* NextUI Progress Bar */}
                  <div className="mt-2">
                    <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
                      <div
                        className={
                          "h-4 rounded-full bg-indigo-600 transition-all duration-700 ease-in-out"
                        }
                        style={{ width: `${aiDetection.confidence}%` }}
                      ></div>
                    </div>
                    <p className="mt-2">{aiDetection.confidence}% Confidence</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
