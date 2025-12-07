"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import TutorCard from "../../components/tutor-card";
import ScheduleTime from "../../components/schedule-time";
import SessionDetail from "./session-detail";
import ConfirmBooking from "./confirm-booking";
import Button from "../../components/ui/button";
import NavBar from "@/components/navigation/NavBar";

export default function SessionPage() {
  const [selectedTime, setSelectedTime] = useState("08:00");
  const [sessionLength, setSessionLength] = useState("1 Hour");
  const [topic, setTopic] = useState("Algebra");
  const [notes, setNotes] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [currentScreen, setCurrentScreen] = useState("booking");

  const [selectedTimes, setSelectedTimes] = useState([]);

  const [frequency, setFrequency] = useState("Weekly");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim()) {
      const results = [
        { id: 1, title: "Mathematics", category: "Subject" },
        { id: 2, title: "Algebra", category: "Topic" },
        { id: 3, title: "Geometry", category: "Topic" },
        { id: 4, title: "Calculus", category: "Topic" },
      ].filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleProceedToPayment = () => {
    setCurrentScreen("confirm");
  };

  const handleBackToBooking = () => {
    setCurrentScreen("booking");
  };

  if (currentScreen === "confirm") {
    return (
      <ConfirmBooking
        onBack={handleBackToBooking}
        sessionLength={sessionLength}
        topic={topic}
        notes={notes}
        selectedTimes={selectedTimes}
        frequency={frequency}
        startDate={startDate}
        endDate={endDate}
      />
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-4 sm:pb-8">
      <NavBar />
     
      <div className="grid grid-cols-1 mt-10 md:grid-cols-3 gap-4 sm:gap-8">
        {/* Left Column */}
        <div className="col-span-1">
          {/* Book Session Title */}
          <div className="mb-4 sm:mb-8">
            <h1
              className="text-xl sm:text-2xl font-bold mb-2"
              style={{ color: "#0a0a0a" }}
            >
              Book Session
            </h1>
            <p className="text-sm" style={{ color: "#6d717f" }}>
              Pick time and date to confirm booking
            </p>
          </div>

          {/* Tutor Card */}
          <TutorCard />

          {/* Schedule Time */}
          <ScheduleTime
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
          />
        </div>

        {/* Right Column */}
        <div className="col-span-1 md:col-span-2">
          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-3 mb-4 sm:mb-8">
            <div className="flex-1 relative">
              <Search
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2"
                style={{ color: "#9ea2ae" }}
              />
              <input
                type="text"
                placeholder="Search for anything"
                value={searchQuery}
                onChange={handleSearchInputChange}
                onKeyPress={handleKeyPress}
                className="w-full pl-10 pr-4 py-2 sm:py-3 rounded-lg border text-sm sm:text-base"
                style={{
                  borderColor: "#e5e7ea",
                  backgroundColor: "#f9fafb",
                  color: "#394050",
                }}
              />
            </div>
            <Button
              onClick={handleSearch}
              style={{ backgroundColor: "#3da755", color: "#ffffff" }}
              className="w-full sm:w-auto px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold"
            >
              Search
            </Button>
          </div>

          {/* Search Results */}
          {searchResults.length > 0 && (
            <div
              className="mb-4 sm:mb-8 p-3 sm:p-4 rounded-lg border"
              style={{ borderColor: "#e5e7ea", backgroundColor: "#f9fafb" }}
            >
              <h3
                className="font-bold mb-2 sm:mb-3"
                style={{ color: "#0a0a0a" }}
              >
                Search Results
              </h3>
              <div className="space-y-2">
                {searchResults.map((result) => (
                  <div
                    key={result.id}
                    className="p-2 rounded hover:bg-gray-100 cursor-pointer"
                    style={{ color: "#394050" }}
                  >
                    <p className="font-semibold text-sm sm:text-base">
                      {result.title}
                    </p>
                    <p className="text-xs" style={{ color: "#6d717f" }}>
                      {result.category}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Session Detail */}
          <SessionDetail
            sessionLength={sessionLength}
            setSessionLength={setSessionLength}
            topic={topic}
            setTopic={setTopic}
            notes={notes}
            setNotes={setNotes}
            onProceedToPayment={handleProceedToPayment}
          />
        </div>
      </div>
    </div>
  );
}
