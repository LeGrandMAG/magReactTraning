import { useState } from "react";

export default function Message() {
  const [messages, setMessages] = useState([]);
  return (
    <div>
      {messages.length > 0 ? (
        <h2>
          You have {messages.length}{" "}
          {messages.length === 1 ? "message" : "messages"}.
        </h2>
      ) : (
        <h2>You are all caught up.</h2>
      )}
    </div>
  );
}
