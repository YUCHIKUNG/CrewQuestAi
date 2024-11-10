import React from "react";
import "./styles.css"; // Ensure you have styles.css in your src folder
import ChatGPTComponent from "./ChatGPTComponent"; // Import the chat component

export default function App() {
  return (
    <div className="App">
      <h1>Crew Quest</h1>
      <h2>Mission Statement</h2>
      <p>
        To empower college students in College Station to experience meaningful
        and personalized hangouts by using AI-driven insights that align with
        their unique preferences, budgets, and schedules—transforming everyday
        outings into memorable adventures.
      </p>

      {/* ChatGPT Component */}
      <ChatGPTComponent />
    </div>
  );
}
