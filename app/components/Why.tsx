"use client";
import React, { useState } from "react";

export default function Why() {
  return (
    <section className="bg-white md:mt-24 mt-4 py-12">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold text-gray-900">
          Why Choose Sequester?
        </h1>
        <p className="mt-4 text-lg text-gray-500">
          We believe in empowering writers and protecting privacy
        </p>
      </div>

      <div className="justify-center items-center flex">
        <div className="flex flex-col md:flex-row px-4 md:px-32 mt-12 space-y-4 md:space-x-20 md:space-y-0">
          {/* WritingPrivacy section */}
          <div className="flex-1 md:flex md:items-start md:space-x-4">
            <div>
              {/* Icon */}
              <svg
                className="w-6 h-6 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div>
              {/* Content */}
              <h1 className="text-xl font-bold mt-2 md:mt-0">
                Cutting-edge AI
              </h1>
              <p className="max-w-lg mt-2 text-base text-gray-500">
                We leverage the latest advancements in artificial intelligence
                to provide top-notch privacy protection and detection
                capabilities.
              </p>
            </div>
          </div>
          <div className="flex-1 md:flex md:items-start md:space-x-4">
            <div>
              {/* Icon */}
              <svg
                className="w-6 h-6 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div>
              {/* Content */}
              <h1 className="text-xl font-bold mt-2 md:mt-0">High Accuracy</h1>
              <p className="max-w-lg mt-2 text-base text-gray-500">
                Our tools provide unparalleled precision in both privacy
                protection and AI detection, ensuring reliable results.
              </p>
            </div>
          </div>
          <div className="flex-1 md:flex md:items-start md:space-x-4">
            <div>
              {/* Icon */}
              <svg
                className="w-6 h-6 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div>
              {/* Content */}
              <h1 className="text-xl font-bold mt-2 md:mt-0">User-Friendly</h1>
              <p className="max-w-lg mt-2 text-base text-gray-500">
                Experience our intuitive and easy-to-use interface, designed
                with your convenience in mind.
              </p>
            </div>
          </div>
          <div className="flex-1 md:flex md:items-start md:space-x-4">
            <div>
              {/* Icon */}
              <svg
                className="w-6 h-6 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div>
              {/* Content */}
              <h1 className="text-xl font-bold mt-2 md:mt-0">Expert Support</h1>
              <p className="max-w-lg mt-2 text-base text-gray-500">
                Our dedicated customer support team is always ready to assist
                you with any questions or concerns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
