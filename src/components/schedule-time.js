"use client"

import { useState, useEffect, useRef } from "react"
import { Clock, X, Plus, ChevronDown } from "lucide-react"
import Button from "@/components/ui/Button"

const timeSlots = ["08:00", "09:00", "10:00", "11:00", "12:00", "01:00", "02:00", "03:00"]
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const frequencyOptions = ["One-time", "Weekly", "Bi-weekly", "Monthly"]

export default function ScheduleTime({ selectedTime, setSelectedTime }) {
  const [selectedDay, setSelectedDay] = useState("Monday")
  const [isDayDropdownOpen, setIsDayDropdownOpen] = useState(false)
  const [selectedSlots, setSelectedSlots] = useState([])
  const [currentTime, setCurrentTime] = useState(null)
  const [selectedFrequency, setSelectedFrequency] = useState("Weekly")
  const [isFrequencyDropdownOpen, setIsFrequencyDropdownOpen] = useState(false)
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")

  // Refs for dropdowns
  const dayDropdownRef = useRef(null)
  const frequencyDropdownRef = useRef(null)

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dayDropdownRef.current && !dayDropdownRef.current.contains(e.target)) {
        setIsDayDropdownOpen(false)
      }
      if (frequencyDropdownRef.current && !frequencyDropdownRef.current.contains(e.target)) {
        setIsFrequencyDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleAddTime = () => {
    if (currentTime) {
      const newSlot = `${selectedDay.slice(0, 3).toUpperCase()} ${currentTime}`
      setSelectedSlots([...selectedSlots, newSlot])
      setCurrentTime(null)
    }
  }

  const handleRemoveSlot = (index) => {
    setSelectedSlots(selectedSlots.filter((_, i) => i !== index))
  }

  const handleTimeSelect = (time) => {
    setCurrentTime(time)
    setSelectedTime(time)
  }

  return (
    <div className="max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto p-4 sm:p-6">
      {/* Title */}
      <h3 className="text-base sm:text-lg font-bold mb-1" style={{ color: "#0a0a0a" }}>
        Schedule Time
      </h3>
      <p className="text-xs sm:text-sm mb-4" style={{ color: "#6d717f" }}>
        Based on teacher availability
      </p>

      {/* Selected Time Chips */}
      <div className="flex flex-wrap gap-2 mb-6">
        {selectedSlots.map((slot, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-3 py-2 rounded-lg border text-sm sm:text-base"
            style={{ borderColor: "#e5e7ea", backgroundColor: "#e9fbe6" }}
          >
            <span className="font-semibold" style={{ color: "#143b0d" }}>
              {slot}
            </span>
            <button onClick={() => handleRemoveSlot(index)} className="hover:opacity-70 transition-opacity">
              <X size={16} style={{ color: "#143b0d", cursor: "pointer" }} />
            </button>
          </div>
        ))}

        {currentTime && selectedSlots.length === 0 && (
          <div
            className="flex items-center gap-2 px-3 py-2 rounded-lg border text-sm sm:text-base"
            style={{ borderColor: "#e5e7ea", backgroundColor: "#e9fbe6" }}
          >
            <span className="font-semibold" style={{ color: "#143b0d" }}>
              {selectedDay.slice(0, 3).toUpperCase()} {currentTime}
            </span>
            <button onClick={() => setCurrentTime(null)} className="hover:opacity-70 transition-opacity">
              <X size={16} style={{ color: "#143b0d", cursor: "pointer" }} />
            </button>
          </div>
        )}

        <Button
          onClick={handleAddTime}
          disabled={!currentTime}
          style={{
            backgroundColor: currentTime ? "#3cb027" : "#d2d5db",
            color: "#ffffff",
          }}
          className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm sm:text-base"
        >
          <Plus size={16} />
          Add
        </Button>
      </div>

      {/* Day Selector */}
      <div className="mb-6 relative" ref={dayDropdownRef}>
        <button
          onClick={() => setIsDayDropdownOpen(!isDayDropdownOpen)}
          className="w-full flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 rounded-lg border text-sm sm:text-base"
          style={{ borderColor: "#e5e7ea", backgroundColor: "#f9fafb" }}
        >
          <span style={{ color: "#0a0a0a" }}>{selectedDay}</span>
          <ChevronDown size={16} style={{ color: "#6d717f" }} />
        </button>

        {isDayDropdownOpen && (
          <div
            className="absolute top-full left-0 right-0 mt-1 rounded-lg border shadow-lg z-10 max-h-48 overflow-y-auto"
            style={{ borderColor: "#e5e7ea", backgroundColor: "#ffffff" }}
          >
            {days.map((day) => (
              <button
                key={day}
                onClick={() => {
                  setSelectedDay(day)
                  setIsDayDropdownOpen(false)
                }}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg text-sm sm:text-base"
                style={{
                  color: selectedDay === day ? "#3da755" : "#0a0a0a",
                  backgroundColor: selectedDay === day ? "#e9fbe6" : "#ffffff",
                }}
              >
                {day}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Time Slots */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mb-8">
        {timeSlots.map((time) => (
          <button
            key={time}
            onClick={() => handleTimeSelect(time)}
            className={`flex items-center justify-center gap-2 px-2 sm:px-3 py-2 rounded-lg border transition-all text-xs sm:text-sm ${
              currentTime === time ? "border-2" : "border"
            }`}
            style={{
              borderColor: currentTime === time ? "#3da755" : "#e5e7ea",
              backgroundColor: currentTime === time ? "#e9fbe6" : "#ffffff",
              color: currentTime === time ? "#143b0d" : "#394050",
            }}
          >
            <Clock size={14} />
            <span className="font-semibold">{time}</span>
          </button>
        ))}
      </div>

      {/* Session Frequency */}
      <div>
        <h3 className="text-base sm:text-lg font-bold mb-1" style={{ color: "#0a0a0a" }}>
          Session Frequency
        </h3>
        <p className="text-xs sm:text-sm mb-4" style={{ color: "#6d717f" }}>
          Based on teacher availability
        </p>

        {/* Frequency Dropdown */}
        <div className="mb-4 relative" ref={frequencyDropdownRef}>
          <button
            onClick={() => setIsFrequencyDropdownOpen(!isFrequencyDropdownOpen)}
            className="w-full flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 rounded-lg border text-sm sm:text-base"
            style={{ borderColor: "#e5e7ea", backgroundColor: "#f9fafb" }}
          >
            <span style={{ color: "#0a0a0a" }}>{selectedFrequency}</span>
            <ChevronDown size={16} style={{ color: "#6d717f" }} />
          </button>

          {isFrequencyDropdownOpen && (
            <div
              className="absolute top-full left-0 right-0 mt-1 rounded-lg border shadow-lg z-10 max-h-48 overflow-y-auto"
              style={{ borderColor: "#e5e7ea", backgroundColor: "#ffffff" }}
            >
              {frequencyOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    setSelectedFrequency(option)
                    setIsFrequencyDropdownOpen(false)
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg text-sm sm:text-base"
                  style={{
                    color: selectedFrequency === option ? "#3da755" : "#0a0a0a",
                    backgroundColor: selectedFrequency === option ? "#e9fbe6" : "#ffffff",
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Date Pickers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="relative">
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border text-sm sm:text-base"
              style={{
                borderColor: "#e5e7ea",
                backgroundColor: "#f9fafb",
                color: "#0a0a0a",
                colorScheme: "light",
              }}
            />
          </div>
          <div className="relative">
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border text-sm sm:text-base"
              style={{
                borderColor: "#e5e7ea",
                backgroundColor: "#f9fafb",
                color: "#0a0a0a",
                colorScheme: "light",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
