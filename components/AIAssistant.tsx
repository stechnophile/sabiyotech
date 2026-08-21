"use client";

import {useState} from "react";

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  async function sendMessage() {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message
      })
    });

    const data = await res.json();
    setReply(data.reply);
  }

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-blue-600 px-5 py-4 text-white shadow-xl"
      >
        🤖 Ask Yogesh AI
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-96 rounded-xl bg-white p-4 shadow-2xl">

          <h3 className="mb-4 font-bold text-black">
            Ask Yogesh AI
          </h3>

          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask something..."
            className="w-full rounded border p-2 text-black"
          />

          <button
            onClick={sendMessage}
            className="mt-3 rounded bg-blue-600 px-4 py-2 text-white"
          >
            Send
          </button>

          {reply && (
            <div className="mt-4 rounded bg-slate-100 p-3 text-black">
              {reply}
            </div>
          )}

        </div>
      )}
    </>
  );
}