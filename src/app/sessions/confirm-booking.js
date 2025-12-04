"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { FaPaypal } from "react-icons/fa";
import Button from "../../components/ui/button";
import PaymentSuccessfulModal from "../../components/payment-successful-modal";
import LiveSession from "./live-session";

export default function ConfirmBooking({
  onBack,
  sessionLength,
  topic,
  notes,
  selectedTimes,
  frequency,
  startDate,
  endDate,
}) {
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardholderName, setCardholderName] = useState("");
  const [saveCard, setSaveCard] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [currentScreen, setCurrentScreen] = useState("payment");

  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\s/g, "");
    if (value.length <= 16) {
      value = value.replace(/(\d{4})/g, "$1 ").trim();
      setCardNumber(value);
    }
  };

  const handleExpiryChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length <= 4) {
      if (value.length >= 2) {
        value = value.slice(0, 2) + "/" + value.slice(2);
      }
      setExpiryDate(value);
    }
  };

  const handleCvvChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 3) {
      setCvv(value);
    }
  };

  const handlePayNow = () => {
    console.log("[v0] Payment submitted:", {
      paymentMethod,
      cardNumber,
      expiryDate,
      cvv,
      cardholderName,
      saveCard,
    });
    setShowPaymentModal(true);
  };

  const handleStartLiveSession = () => {
    setCurrentScreen("live-session");
  };

  if (currentScreen === "live-session") {
    return <LiveSession onBack={onBack} />;
  }

  return (
    <>
      {showPaymentModal && (
        <PaymentSuccessfulModal onStartLiveSession={handleStartLiveSession} />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
        {/* Back Button and Title */}
        <div className="mb-4 sm:mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 mb-2 sm:mb-4 text-sm font-semibold"
            style={{ color: "#3da755" }}
          >
            <ArrowLeft size={18} />
            Book Session
          </button>
          <h1
            className="text-xl sm:text-2xl font-bold"
            style={{ color: "#0a0a0a" }}
          >
            Confirm Session
          </h1>
          <p className="text-sm" style={{ color: "#6d717f" }}>
            Review your order and complete payment securely
          </p>
        </div>

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-4 sm:mb-8">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search for anything"
              className="w-full px-4 py-2 sm:py-3 rounded-lg border text-sm sm:text-base"
              style={{
                borderColor: "#e5e7ea",
                backgroundColor: "#f9fafb",
                color: "#394050",
              }}
            />
          </div>
          <Button
            style={{ backgroundColor: "#3da755", color: "#ffffff" }}
            className="w-full sm:w-auto px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold"
          >
            Search
          </Button>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
          {/* Left Column - Booking Summary */}
          <div className="space-y-4 sm:space-y-6">
            {/* Booking Summary */}
            <div
              className="p-4 sm:p-6 rounded-lg border"
              style={{ borderColor: "#e5e7ea", backgroundColor: "#ffffff" }}
            >
              <h2
                className="text-lg font-bold mb-1"
                style={{ color: "#0a0a0a" }}
              >
                Booking Summary
              </h2>
              <p className="text-sm mb-6" style={{ color: "#6d717f" }}>
                Review your session booking
              </p>

              <div className="space-y-4">
                <div>
                  <p
                    className="text-xs font-semibold mb-1"
                    style={{ color: "#6d717f" }}
                  >
                    Tutor
                  </p>
                  <p style={{ color: "#0a0a0a" }}>Dr. Sarah Johnson</p>
                </div>
                <div>
                  <p
                    className="text-xs font-semibold mb-1"
                    style={{ color: "#6d717f" }}
                  >
                    Subject
                  </p>
                  <p style={{ color: "#0a0a0a" }}>Mathematics</p>
                </div>
                <div>
                  <p
                    className="text-xs font-semibold mb-1"
                    style={{ color: "#6d717f" }}
                  >
                    Topic
                  </p>
                  <p style={{ color: "#0a0a0a" }}>{topic || "Not selected"}</p>
                </div>
                <div>
                  <p
                    className="text-xs font-semibold mb-1"
                    style={{ color: "#6d717f" }}
                  >
                    Schedule
                  </p>
                  <p style={{ color: "#0a0a0a" }}>
                    {selectedTimes.length > 0
                      ? selectedTimes.join(", ")
                      : "MON 8 - 9 PM"}
                  </p>
                </div>
                <div>
                  <p
                    className="text-xs font-semibold mb-1"
                    style={{ color: "#6d717f" }}
                  >
                    Sessions
                  </p>
                  <p style={{ color: "#0a0a0a" }}>
                    {selectedTimes.length || 1}
                  </p>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div
              className="p-4 sm:p-6 rounded-lg border"
              style={{ borderColor: "#e5e7ea", backgroundColor: "#ffffff" }}
            >
              <h2
                className="text-lg font-bold mb-1"
                style={{ color: "#0a0a0a" }}
              >
                Order Summary
              </h2>
              <p className="text-sm mb-6" style={{ color: "#6d717f" }}>
                Review your session order
              </p>

              <div
                className="space-y-3 pb-4 border-b"
                style={{ borderColor: "#e5e7ea" }}
              >
                <div className="flex justify-between">
                  <span style={{ color: "#6d717f" }}>Base Price</span>
                  <span style={{ color: "#0a0a0a" }}>$45.00</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: "#6d717f" }}>Service Fee</span>
                  <span style={{ color: "#0a0a0a" }}>$3.00</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: "#6d717f" }}>Tax</span>
                  <span style={{ color: "#0a0a0a" }}>$2.47</span>
                </div>
              </div>

              <div className="flex justify-between mt-4">
                <span className="font-semibold" style={{ color: "#0a0a0a" }}>
                  Total
                </span>
                <span
                  className="font-bold text-lg"
                  style={{ color: "#0a0a0a" }}
                >
                  $50.47
                </span>
              </div>
            </div>

            {/* Billing Info */}
            <div
              className="p-4 sm:p-6 rounded-lg border"
              style={{ borderColor: "#e5e7ea", backgroundColor: "#ffffff" }}
            >
              <h2
                className="text-lg font-bold mb-1"
                style={{ color: "#0a0a0a" }}
              >
                Billing Info
              </h2>
              <p className="text-sm mb-6" style={{ color: "#6d717f" }}>
                Review your session booking
              </p>

              <div>
                <label
                  className="block text-sm font-semibold mb-2"
                  style={{ color: "#0a0a0a" }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-2 rounded-lg border"
                  style={{
                    borderColor: "#e5e7ea",
                    backgroundColor: "#f9fafb",
                    color: "#394050",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right Column - Payment Detail */}
          <div className="lg:col-span-2">
            <div
              className="p-4 sm:p-6 rounded-lg border"
              style={{ borderColor: "#e5e7ea", backgroundColor: "#ffffff" }}
            >
              <h2
                className="text-lg font-bold mb-1"
                style={{ color: "#0a0a0a" }}
              >
                Payment Detail
              </h2>
              <p className="text-sm mb-6" style={{ color: "#6d717f" }}>
                Choose a payment method to complete your booking
              </p>

              {/* Payment Method Selection */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <button
                  onClick={() => setPaymentMethod("credit-card")}
                  className="w-full sm:w-auto py-2 px-4 rounded-lg border-2 font-semibold transition-all"
                  style={{
                    borderColor:
                      paymentMethod === "credit-card" ? "#3da755" : "#e5e7ea",
                    backgroundColor:
                      paymentMethod === "credit-card" ? "#e9fbe6" : "#ffffff",
                    color:
                      paymentMethod === "credit-card" ? "#3da755" : "#0a0a0a",
                  }}
                >
                  💳 Credit Card
                </button>
                <button
                  onClick={() => setPaymentMethod("paypal")}
                  className="w-full sm:w-auto py-2 px-4 rounded-lg border-2 font-semibold transition-all flex items-center justify-center"
                  style={{
                    borderColor:
                      paymentMethod === "paypal" ? "#3da755" : "#e5e7ea",
                    backgroundColor:
                      paymentMethod === "paypal" ? "#e9fbe6" : "#ffffff",
                    color: paymentMethod === "paypal" ? "#3da755" : "#0a0a0a",
                  }}
                >
                  <FaPaypal className="text-blue-600 mr-2" size={18} /> PayPal
                </button>
              </div>

              {/* Credit Card Form */}
              {paymentMethod === "credit-card" && (
                <div className="space-y-4 sm:space-y-6">
                  {/* Card Number */}
                  <div>
                    <label
                      className="block text-sm font-semibold mb-2"
                      style={{ color: "#0a0a0a" }}
                    >
                      Credit Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="•••• •••• •••• ••••"
                      value={cardNumber}
                      onChange={handleCardNumberChange}
                      maxLength="19"
                      className="w-full px-4 py-3 rounded-lg border"
                      style={{
                        borderColor: "#e5e7ea",
                        backgroundColor: "#f9fafb",
                        color: "#394050",
                      }}
                    />
                    <p className="text-xs mt-2" style={{ color: "#6d717f" }}>
                      We use secured, encrypted processing
                    </p>
                  </div>

                  {/* Expiry and CVV */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-sm font-semibold mb-2"
                        style={{ color: "#0a0a0a" }}
                      >
                        Expiry Date (MM/YY)
                      </label>
                      <input
                        type="text"
                        placeholder="09/28"
                        value={expiryDate}
                        onChange={handleExpiryChange}
                        maxLength="5"
                        className="w-full px-4 py-3 rounded-lg border"
                        style={{
                          borderColor: "#e5e7ea",
                          backgroundColor: "#f9fafb",
                          color: "#394050",
                        }}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-semibold mb-2"
                        style={{ color: "#0a0a0a" }}
                      >
                        CVV
                      </label>
                      <input
                        type="text"
                        placeholder="123"
                        value={cvv}
                        onChange={handleCvvChange}
                        maxLength="3"
                        className="w-full px-4 py-3 rounded-lg border"
                        style={{
                          borderColor: "#e5e7ea",
                          backgroundColor: "#f9fafb",
                          color: "#394050",
                        }}
                      />
                    </div>
                  </div>

                  {/* Cardholder Name */}
                  <div>
                    <label
                      className="block text-sm font-semibold mb-2"
                      style={{ color: "#0a0a0a" }}
                    >
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      value={cardholderName}
                      onChange={(e) => setCardholderName(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border"
                      style={{
                        borderColor: "#e5e7ea",
                        backgroundColor: "#f9fafb",
                        color: "#394050",
                      }}
                    />
                  </div>

                  {/* Save Card Checkbox */}
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="save-card"
                      checked={saveCard}
                      onChange={(e) => setSaveCard(e.target.checked)}
                      className="w-4 h-4 rounded"
                      style={{ accentColor: "#3da755" }}
                    />
                    <label
                      htmlFor="save-card"
                      className="text-sm"
                      style={{ color: "#6d717f" }}
                    >
                      Securely save my card for future payments
                    </label>
                  </div>
                </div>
              )}

              {/* PayPal Message */}
              {paymentMethod === "paypal" && (
                <div
                  className="p-4 rounded-lg"
                  style={{ backgroundColor: "#f9fafb" }}
                >
                  <p style={{ color: "#6d717f" }}>
                    You will be redirected to PayPal to complete your payment
                    securely.
                  </p>
                </div>
              )}

              {/* Action Buttons */}
              <div
                className="flex flex-col sm:flex-row justify-end gap-3 mt-6"
                style={{ borderColor: "#e5e7ea" }}
              >
                <Button
                  variant="outline"
                  className="w-full sm:w-auto px-6 py-2 bg-transparent order-2 sm:order-1"
                  style={{
                    borderColor: "#3da755",
                    color: "#3da755",
                    backgroundColor: "#ffffff",
                  }}
                  onClick={onBack}
                >
                  Cancel
                </Button>
                <Button
                  style={{ backgroundColor: "#3cb027", color: "#ffffff" }}
                  className="w-full sm:w-auto px-6 py-2 flex items-center justify-center gap-2 order-1 sm:order-2"
                  onClick={handlePayNow}
                >
                  Pay Now
                  <span>→</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
