"use client"

import { useState, useEffect, useRef } from "react"
import { Clock, BookOpen, ChevronDown, ArrowRight } from "lucide-react"
import Button from "@/components/ui/Button"
import CancelBookingModal from "./cancel-booking-modal"

const sessionLengths = ["30 mins", "1 Hour", "1.5 Hours", "2 Hours"]
const topics = ["Algebra", "Geometry", "Calculus", "Statistics", "Trigonometry", "Pre-Calculus"]

export default function SessionDetail({
  sessionLength,
  setSessionLength,
  topic,
  setTopic,
  notes,
  setNotes,
  onProceedToPayment,
}) {
  const [isLengthDropdownOpen, setIsLengthDropdownOpen] = useState(false)
  const [isTopicDropdownOpen, setIsTopicDropdownOpen] = useState(false)
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false)

  // Refs for dropdowns
  const lengthDropdownRef = useRef(null)
  const topicDropdownRef = useRef(null)

  // Handle click outside to close dropdowns
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        lengthDropdownRef.current &&
        !lengthDropdownRef.current.contains(event.target)
      ) {
        setIsLengthDropdownOpen(false)
      }
      if (
        topicDropdownRef.current &&
        !topicDropdownRef.current.contains(event.target)
      ) {
        setIsTopicDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleCancelConfirm = () => {
    setIsCancelModalOpen(false)
    setSessionLength("1 Hour")
    setTopic("Algebra")
    setNotes("")
  }

  return (
    <>
      <div
        className="p-4 sm:p-6 rounded-lg border max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto"
        style={{ borderColor: "#e5e7ea", backgroundColor: "#ffffff" }}
      >
        {/* Header */}
        <h2 className="text-base sm:text-lg font-bold mb-1 sm:mb-2" style={{ color: "#0a0a0a" }}>
          Session Detail
        </h2>
        <p className="text-xs sm:text-sm mb-4 sm:mb-6" style={{ color: "#6d717f" }}>
          Select Topic and length
        </p>

        {/* Session Length */}
        <div className="mb-4 sm:mb-6" ref={lengthDropdownRef}>
          <label className="block text-sm sm:text-base font-semibold mb-2" style={{ color: "#0a0a0a" }}>
            Session Length
          </label>
          <div className="relative">
            <button
              onClick={() => setIsLengthDropdownOpen(!isLengthDropdownOpen)}
              className="w-full flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 rounded-lg border text-sm sm:text-base"
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
                className="absolute top-full left-0 right-0 mt-1 rounded-lg border shadow-lg z-10 max-h-48 overflow-y-auto"
                style={{ borderColor: "#e5e7ea", backgroundColor: "#ffffff" }}
              >
                {sessionLengths.map((length) => (
                  <button
                    key={length}
                    onClick={() => {
                      setSessionLength(length)
                      setIsLengthDropdownOpen(false)
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg text-sm sm:text-base"
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
        <div className="mb-4 sm:mb-6" ref={topicDropdownRef}>
          <label className="block text-sm sm:text-base font-semibold mb-2" style={{ color: "#0a0a0a" }}>
            Topic
          </label>
          <div className="relative">
            <button
              onClick={() => setIsTopicDropdownOpen(!isTopicDropdownOpen)}
              className="w-full flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 rounded-lg border text-sm sm:text-base"
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
                className="absolute top-full left-0 right-0 mt-1 rounded-lg border shadow-lg z-10 max-h-48 overflow-y-auto"
                style={{ borderColor: "#e5e7ea", backgroundColor: "#ffffff" }}
              >
                {topics.map((t) => (
                  <button
                    key={t}
                    onClick={() => {
                      setTopic(t)
                      setIsTopicDropdownOpen(false)
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg text-sm sm:text-base"
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
        <div className="mb-4 sm:mb-6">
          <label className="block text-sm sm:text-base font-semibold mb-2" style={{ color: "#0a0a0a" }}>
            Notes for Tutor
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Add any notes or requirements..."
            className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border resize-none text-sm sm:text-base"
            rows={5}
            style={{
              borderColor: "#e5e7ea",
              backgroundColor: "#f9fafb",
              color: "#0a0a0a",
            }}
          />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-end">
          <Button
            variant="outline"
            className="px-4 sm:px-6 bg-transparent w-full sm:w-auto"
            style={{
              borderColor: "#3da755",
              color: "#3da755",
              backgroundColor: "#ffffff",
            }}
            onClick={() => setIsCancelModalOpen(true)}
          >
            Cancel
          </Button>
          <Button
            style={{ backgroundColor: "#3cb027", color: "#ffffff" }}
            className="px-4 py-2 flex items-center justify-center gap-2 h-12 w-full sm:w-auto"
            onClick={onProceedToPayment}
          >
            Proceed to Payment
            <ArrowRight size={18} />
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
