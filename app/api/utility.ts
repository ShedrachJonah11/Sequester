"use client";

import BASE_URL from "./config";

const processText = async (text: string): Promise<string> => {
  try {
    const response = await fetch(`${BASE_URL}/paraphrase`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Failed to process text: ${errorMessage}`);
    }

    const data = await response.json();
    return data.paraphrased_text;
  } catch (error) {
    console.error("Error processing text:", error);
    throw error;
  }
};

export default processText;
