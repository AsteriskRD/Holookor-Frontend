"use client"

import { useState } from "react"
import { ArrowLeft, Send } from "lucide-react"

export default function LiveSession({ onBack }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Dr. Sarah Johnson",
      message: "Welcome to our session! Ready to learn some Algebra?",
      time: "2:30 PM",
      isUser: false,
    },
    {
      id: 2,
      sender: "Alex Thompson",
      message: "Yes, I'm excited to learn!",
      time: "2:31 PM",
      isUser: true,
    },
  ])
  const [newMessage, setNewMessage] = useState("")
  const [activeTab, setActiveTab] = useState("chat")
  const [sessionTime, setSessionTime] = useState("00:37")

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          sender: "You",
          message: newMessage,
          time: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
          isUser: true,
        },
      ])
      setNewMessage("")
    }
  }

  return (
    <div className="min-h-screen bg-[#f3fff1] flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-[#e5e7ea]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-sm font-semibold text-[#3da755]"
            >
              <ArrowLeft size={18} />
            </button>
            <div>
              <h1 className="text-base sm:text-lg font-bold text-[#0a0a0a]">
                Mathematics - Algebra
              </h1>
              <p className="text-xs sm:text-sm text-[#6d717f]">with Dr. Sarah Johnson</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="bg-red-100 px-3 py-1 rounded-full flex items-center gap-2">
              <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm font-semibold text-[#ee443f]">
                {sessionTime}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left - Whiteboard */}
        <div className="lg:col-span-2">
          <div
            className="rounded-lg overflow-hidden relative min-h-[400px] sm:min-h-[500px]"
            style={{
              background: "linear-gradient(135deg, #CFECC3 0%, #F6E7B4 100%)",
            }}
          >
            {/* Toolbar */}
            <div className="absolute top-3 sm:top-4 left-1/2 -translate-x-1/2 bg-white rounded-lg p-2 sm:p-3 flex gap-1 sm:gap-2 shadow-lg">
              {["✓", "✏️", "○", "□", "T", "🖼️", "⬇️"].map((icon, index) => (
                <button
                  key={index}
                  className="p-1 sm:p-2 rounded hover:bg-gray-100 text-sm sm:text-base"
                  title={`Tool ${icon}`}
                >
                  {icon}
                </button>
              ))}
            </div>

            {/* Whiteboard Content */}
            <div className="h-full flex flex-col items-center justify-center px-3 text-center">
              <div>
                <div className="text-3xl sm:text-4xl mb-2">📋</div>
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-[#143b0d]">
                  Interactive Whiteboard Active
                </h3>
                <p className="text-xs sm:text-sm text-[#394050]">
                  Draw, write, and collaborate in real-time
                </p>
              </div>

              {/* Participant Avatars */}
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 flex gap-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-700 flex items-center justify-center text-white text-[10px] sm:text-xs font-bold">
                  DS
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-600 flex items-center justify-center text-white text-[10px] sm:text-xs font-bold">
                  JD
                </div>
              </div>

              {/* Control Buttons */}
              <div className="absolute bottom-12 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3">
                {["🎥", "🎤", "🖥️", "⚙️"].map((icon, index) => (
                  <button
                    key={index}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-green-600 text-white flex items-center justify-center hover:bg-green-700 text-lg"
                  >
                    {icon}
                  </button>
                ))}
              </div>

              {/* Leave Session Button */}
              <button
                onClick={onBack}
                className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-semibold text-white text-xs sm:text-sm flex items-center gap-1 sm:gap-2 hover:opacity-90 bg-[#ee443f]"
              >
                ✕ Leave
              </button>
            </div>
          </div>
        </div>

        {/* Right - Chat Panel */}
        <div
          className="bg-white rounded-lg border border-[#e5e7ea] flex flex-col min-h-[400px] sm:min-h-[500px]"
        >
          {/* Tabs */}
          <div className="flex border-b border-[#e5e7ea]">
            {["Chat", "People", "Notes"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`flex-1 py-2 sm:py-3 text-sm font-semibold border-b-2 transition-all ${
                  activeTab === tab.toLowerCase()
                    ? "border-green-600 text-[#3cb027]"
                    : "border-transparent text-[#6d717f]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3">
            {messages.map((msg) => (
              <div key={msg.id} className="space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-[#0a0a0a]">
                    {msg.sender}
                  </p>
                  <p className="text-xs text-[#9ea2ae]">{msg.time}</p>
                </div>
                <p className="text-sm text-[#394050]">{msg.message}</p>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="border-t border-[#e5e7ea] p-3 sm:p-4">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type a message"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-1 px-3 py-2 rounded-lg border border-[#e5e7ea] bg-[#f9fafb] text-sm text-[#394050] focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                onClick={handleSendMessage}
                className="p-2 rounded-lg bg-[#3cb027] text-white flex items-center justify-center hover:opacity-90"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
