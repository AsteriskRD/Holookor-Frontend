'use client'

import { useState, useRef, useEffect } from 'react'
import { ArrowLeft, Send, Upload } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Image } from "next"

export default function AIStudyAssistant() {
  const router = useRouter()
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: "Hi! I'm your AI study assistant. I can help you with homework questions, generate practice quizzes, explain concepts, and recommend study strategies. What would you like to work on today?",
    },
    {
      id: 2,
      type: 'user',
      text: 'Hi! How are you doing today?',
    },
    {
      id: 3,
      type: 'bot',
      text: "I'm Okay just really excited to help you get started with your learning. What would you like to do today?",
    },
    {
      id: 4,
      type: 'user',
      text: 'I need a brief explanation on why the earth rotates',
    },
    {
      id: 5,
      type: 'bot',
      text: 'When the solar system was created, a huge cloud of gas and dust began to collapse under gravity. As it collapsed, it started to spin — just like a spinning ice skater pulls their arms in and spins faster. The clumps of material that eventually formed planets, including Earth, kept that original angular momentum, so they continued rotating.',
    },
  ])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      text: inputValue,
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue('')
    setIsLoading(true)

    // Simulate bot response delay
    setTimeout(() => {
      const botResponses = [
        'That\'s a great question! Let me help you understand this concept better.',
        'I can see you\'re working on something interesting. Let me provide more details.',
        'Excellent! This is an important topic. Here\'s what you need to know...',
        'You\'re thinking about the right approach. Consider this perspective...',
      ]

      const botMessage = {
        id: messages.length + 2,
        type: 'bot',
        text: botResponses[Math.floor(Math.random() * botResponses.length)],
      }

      setMessages((prev) => [...prev, botMessage])
      setIsLoading(false)
    }, 1000)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <main className="min-h-screen bg-white container mx-auto">
      {/* Header */}
      <div className="w-full px-4 sm:px-6 lg:px-4 pb-3 pt-6">
        <div className="">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 mb-3 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">AI Study Assistant</span>
          </button>
          <p className="text-sm text-gray-500">Get instant help with your studies</p>
        </div>
      </div>

      {/* Chat Container */}
      <div className="px-4 sm:px-6 lg:px-4 py-8">
        <div className="">
          <div className="border-2 border-gray-100 rounded-lg p-6 min-h-96 bg-white flex flex-col">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto mb-6 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.type === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-xs sm:max-w-md lg:max-w-xl px-4 py-3 rounded-lg ${
                      message.type === 'user'
                        ? 'bg-green-50 text-gray-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-300 text-gray-800 px-4 py-3 rounded-lg">
                    <div className="flex gap-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Field */}
            <div className="flex items-center gap-3 border rounded-lg border-gray-300 p-4">
              {/* <MessageCircle className="w-5 h-5 text-gray-600 flex-shrink-0" /> */}
              <img src="/upload.svg" alt="upload icon"/>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me Anything"
                className="flex-1 outline-none text-sm bg-transparent text-gray-700 placeholder-gray-500"
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || inputValue.trim() === ''}
                className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg transition-colors flex items-center gap-2"
              >
                Send
                <Upload className="w-5 h-5 flex-shrink-0 rounded-lg"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
