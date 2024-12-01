import React, { useState } from "react";
import "./ConversationPanel.css";

const ConversationPanel = () => {
  const [messages, setMessages] = useState([
    { text: "Hello, how can I help you?", type: "received" },
    { text: "I have a question about my account.", type: "sent" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, type: "sent" }]);
      setInput("");
    }
  };

  return (
    <div className="conversation-panel">
      <h3>Conversation</h3>
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.type}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ConversationPanel;
