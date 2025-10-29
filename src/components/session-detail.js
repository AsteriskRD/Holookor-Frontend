"use client"

import { Clock, BookOpen, ChevronDown, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import CancelBookingModal from "./cancel-booking-modal"
import ConfirmSession from "./confirm-session"

const sessionLengths = ["30 mins", "1 Hour", "1.5 Hours", "2 Hours"]
const topics = ["Algebra", "Geometry", "Calculus", "Statistics", "Trigonometry", "Pre-Calculus"]

export default function SessionDetail({ sessionLength, setSessionLength, topic, setTopic, notes, setNotes }) {
  const [isLengthDropdownOpen, setIsLengthDropdownOpen] = useState(false)
  const [isTopicDropdownOpen, setIsTopicDropdownOpen] = useState(false)
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false)

  const handleCancelConfirm = () => {
    setIsCancelModalOpen(false)
    // Reset all form data
    setSessionLength("1 Hour")
    setTopic("Algebra")
    setNotes("")
  }

  return (
    <>
      <div className="p-6 rounded-lg border" style={{ borderColor: "#e5e7ea", backgroundColor: "#ffffff" }}>
        <h2 className="text-lg font-bold mb-2" style={{ color: "#0a0a0a" }}>
          Session Detail
        </h2>
        <p className="text-sm mb-6" style={{ color: "#6d717f" }}>
          Select Topic and length
        </p>

        {/* Session Length */}
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-2" style={{ color: "#0a0a0a" }}>
            Session Length
          </label>
          <div className="relative">
            <button
              onClick={() => setIsLengthDropdownOpen(!isLengthDropdownOpen)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-lg border"
              style={{ borderColor: "#e5e7ea", backgroundColor: "#f9fafb" }}
            >
              <div className="flex items-center gap-2">
                <Clock size={18} style={{ color: "#394050" }} />
                <span style={{ color: "#0a0a0a" }}>{sessionLength}</span>
              </div>
              <ChevronDown size={18} style={{ color: "#6d717f" }} />
            </button>

            {isLengthDropdownOpen && (
              <div
                className="absolute top-full left-0 right-0 mt-1 rounded-lg border shadow-lg z-10"
                style={{ borderColor: "#e5e7ea", backgroundColor: "#ffffff" }}
              >
                {sessionLengths.map((length) => (
                  <button
                    key={length}
                    onClick={() => {
                      setSessionLength(length)
                      setIsLengthDropdownOpen(false)
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                    style={{
                      color: sessionLength === length ? "#3da755" : "#0a0a0a",
                      backgroundColor: sessionLength === length ? "#e9fbe6" : "#ffffff",
                    }}
                  >
                    {length}
                  </button>
                ))}
              </div>
            )}
          </div>
          <p className="text-xs mt-2" style={{ color: "#6d717f" }}>
            Teacher Allows 60 - 120 mins with 10 min buffer
          </p>
        </div>

        {/* Topic */}
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-2" style={{ color: "#0a0a0a" }}>
            Topic
          </label>
          <div className="relative">
            <button
              onClick={() => setIsTopicDropdownOpen(!isTopicDropdownOpen)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-lg border"
              style={{ borderColor: "#e5e7ea", backgroundColor: "#f9fafb" }}
            >
              <div className="flex items-center gap-2">
                <BookOpen size={18} style={{ color: "#394050" }} />
                <span style={{ color: "#0a0a0a" }}>{topic}</span>
              </div>
              <ChevronDown size={18} style={{ color: "#6d717f" }} />
            </button>

            {isTopicDropdownOpen && (
              <div
                className="absolute top-full left-0 right-0 mt-1 rounded-lg border shadow-lg z-10"
                style={{ borderColor: "#e5e7ea", backgroundColor: "#ffffff" }}
              >
                {topics.map((t) => (
                  <button
                    key={t}
                    onClick={() => {
                      setTopic(t)
                      setIsTopicDropdownOpen(false)
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                    style={{
                      color: topic === t ? "#3da755" : "#0a0a0a",
                      backgroundColor: topic === t ? "#e9fbe6" : "#ffffff",
                    }}
                  >
                    {t}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Notes for Tutor */}
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-2" style={{ color: "#0a0a0a" }}>
            Notes for Tutor
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Add any notes or requirements..."
            className="w-full px-4 py-3 rounded-lg border resize-none"
            rows={6}
            style={{
              borderColor: "#e5e7ea",
              backgroundColor: "#f9fafb",
              color: "#0a0a0a",
            }}
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 justify-end">
          <Button
            variant="outline"
            className="px-6 bg-transparent"
            style={{
              borderColor: "#3da755",
              color: "#3da755",
              backgroundColor: "#ffffff",
            }}
            onClick={() => setIsCancelModalOpen(true)}
          >
            Cancel
          </Button>
          <Button style={{ backgroundColor: "#3cb027", color: "#ffffff" }} className="px-6 flex items-center gap-2">
            Proceed to Payment
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>

      <CancelBookingModal
        isOpen={isCancelModalOpen}
        onConfirm={handleCancelConfirm}
        onCancel={() => setIsCancelModalOpen(false)}
      />
    </>
  )
}
