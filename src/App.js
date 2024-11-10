import React from "react";
import "./styles.css"; // Ensure you have styles.css in your src folder
import ChatGPTComponent from "./ChatGPTComponent"; // Import the chat component

export default function App() {
  return (
    <div className="App">
      <h1>Crew Quest</h1>
      <h2>Mission Statement</h2>
      <p>
        Our mission is to deliver exceptional services and foster innovation.
      </p>

      {/* ChatGPT Component */}
      <ChatGPTComponent />
    </div>
  );
}
