import { useState } from "react";
import "./../styles/chatbot.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ sender: "bot", text: "Hello! How can I assist you?" }]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");

    setTimeout(() => {
      const botReply = "I'm still learning! But I'll try my best.";
      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
    }, 1000);
  };

  return (
    <div className="chatbot-container">
      {!isOpen && <button className="chatbot-btn" onClick={() => setIsOpen(true)}>💬</button>}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <span>Solana AI Chatbot</span>
            <button onClick={() => setIsOpen(false)}>✖</button>
          </div>
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>{msg.text}</div>
            ))}
          </div>
          <div className="chat-input">
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask me something..." />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
