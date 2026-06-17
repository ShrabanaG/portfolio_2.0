import { useState , useEffect} from "react";
import { Bot, X, Send, Headset } from "lucide-react";


type Message = { role: "user" | "bot"; text: string };

const WELCOME: Message = {
  role: "bot",
  text: "Hi! 👋 I'm Shrabana's assistant. Ask me anything about her skills, experience, or projects.",
};

const ChatBot = () =>  {
  const [isOpen, setIsOpen] = useState(false);          
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!input.trim() || loading) return;               
    const question = input;
    setMessages((prev) => [...prev, { role: "user", text: question }]);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch((import.meta as unknown as { env: { VITE_BOT_URL: string } }).env.VITE_BOT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "bot", text: data.answer }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Sorry, something went wrong. Reach Shrabana at shrabanagoswami8@gmail.com." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
  
    const timer = setTimeout(() => setIsOpen(true), 1500); 
    
    return () => clearTimeout(timer);
  
}, []); 

  return (
    <>
      
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open chat"
          className="fixed bottom-6 right-6 z-50 rounded-full p-4 bg-white text-black shadow-lg animate-pulse"
        >
          <Headset size={30} />

        </button>
      )}

      
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 flex h-[28rem] w-80 flex-col rounded-2xl border border-white/20 bg-black/80 backdrop-blur-md text-white shadow-2xl">
          
          <div className="flex items-center justify-between border-b border-white/10 p-3">
            <span className="text-sm font-medium">Ask about Shrabana</span>
            <button onClick={() => setIsOpen(false)} aria-label="Close chat">
              <X size={18} />
            </button>
          </div>

          
          <div className="flex-1 space-y-2 overflow-y-auto p-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                  m.role === "user" ? "ml-auto bg-white text-black" : "mr-auto bg-white/10"
                }`}
              >
                {m.text}
              </div>
            ))}
            {loading && <div className="mr-auto text-xs text-white/50">typing…</div>}
          </div>

          
          <div className="flex items-center gap-2 border-t border-white/10 p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type a question…"
              className="flex-1 rounded-lg bg-white/10 px-3 py-2 text-sm outline-none placeholder:text-white/40"
            />
            <button onClick={sendMessage} disabled={loading} aria-label="Send">
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatBot;