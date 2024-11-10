// src/ChatGPTComponent.js

import React, { useState } from "react";
import axios from "axios";

const ChatGPTComponent = () => {
  const [userMessage, setUserMessage] = useState("");
  const [chatResponse, setChatResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/completions",
        {
          model: "gpt-3.5-turbo", // You can replace this with 'gpt-4' if needed
          messages: [{ role: "user", content: userMessage }],
          max_tokens: 150,
        },
        {
          headers: {
            Authorization: `Bearer YOUR_OPENAI_API_KEY`, // Replace with your OpenAI API Key
            "Content-Type": "application/json",
          },
        }
      );

      const messageContent = response.data.choices[0].message.content;
      setChatResponse(messageContent);
    } catch (error) {
      console.error("Error fetching ChatGPT response: ", error);
      setChatResponse("Sorry, something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ margin: "20px" }}>
      <h3>Chat with GPT-3</h3>
      <textarea
        value={userMessage}
        onChange={(e) => setUserMessage(e.target.value)}
        placeholder="Create a bio about yourself..."
        rows="4"
        cols="50"
      ></textarea>
      <br />
      <button onClick={handleSendMessage} disabled={loading}>
        {loading ? "Loading..." : "Send"}
      </button>
      <div style={{ marginTop: "20px" }}>
        <strong>Response:</strong>
        <p>{chatResponse}</p>
      </div>
    </div>
  );
};

export default ChatGPTComponent;
