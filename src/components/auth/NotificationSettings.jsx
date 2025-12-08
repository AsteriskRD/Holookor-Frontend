"use client";

import { ArrowLeft } from "lucide-react";
import { useState } from "react";

/**
 * NotificationSettings Component - Parent notification preferences
 * Single Responsibility: Manage notification toggle preferences
 */
export default function NotificationSettings({
  onSubmit,
  isLoading = false,
  onBack,
}) {
  const [notifications, setNotifications] = useState({
    sessionReminders: true,
    progressUpdates: true,
    paymentReceipts: true,
  });

  const handleToggle = (key) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSubmit = () => {
    onSubmit(notifications);
  };

  return (
    <div className="w-full">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-green-600 hover:text-green-700 text-sm sm:text-base font-medium mb-6"
      >
        <ArrowLeft className="w-4 h-4" /> Back
      </button>

      {/* Header */}
      <div className="mb-8 sm:mb-10">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
          Notifications
        </h2>
        <p className="text-sm sm:text-base text-gray-600">
          Manage your notification preferences
        </p>
      </div>

      {/* Notification Options */}
      <div className="space-y-4 mb-8">
        {/* Session Reminders */}
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div>
            <p className="text-sm sm:text-base font-semibold text-gray-900">
              Lesson Reminders
            </p>
            <p className="text-xs sm:text-sm text-gray-500">
              Get notified about upcoming sessions
            </p>
          </div>
          <button
            onClick={() => handleToggle("sessionReminders")}
            className={`w-12 h-6 rounded-full transition-colors ${
              notifications.sessionReminders ? "bg-green-600" : "bg-gray-300"
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full bg-white transition-transform ${
                notifications.sessionReminders
                  ? "translate-x-6"
                  : "translate-x-0.5"
              }`}
            />
          </button>
        </div>

        {/* Progress Updates */}
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div>
            <p className="text-sm sm:text-base font-semibold text-gray-900">
              Progress Updates
            </p>
            <p className="text-xs sm:text-sm text-gray-500">
              Receive updates on your child's progress
            </p>
          </div>
          <button
            onClick={() => handleToggle("progressUpdates")}
            className={`w-12 h-6 rounded-full transition-colors ${
              notifications.progressUpdates ? "bg-green-600" : "bg-gray-300"
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full bg-white transition-transform ${
                notifications.progressUpdates
                  ? "translate-x-6"
                  : "translate-x-0.5"
              }`}
            />
          </button>
        </div>

        {/* Payment Receipts */}
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div>
            <p className="text-sm sm:text-base font-semibold text-gray-900">
              Payment Receipts
            </p>
            <p className="text-xs sm:text-sm text-gray-500">
              Get notified for payment and receipts
            </p>
          </div>
          <button
            onClick={() => handleToggle("paymentReceipts")}
            className={`w-12 h-6 rounded-full transition-colors ${
              notifications.paymentReceipts ? "bg-green-600" : "bg-gray-300"
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full bg-white transition-transform ${
                notifications.paymentReceipts
                  ? "translate-x-6"
                  : "translate-x-0.5"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Continue Button */}
      <button
        onClick={handleSubmit}
        disabled={isLoading}
        className="w-full px-6 py-3 sm:py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 disabled:bg-gray-400 transition-colors text-sm sm:text-base"
      >
        {isLoading ? "Saving..." : "Complete Setup"}
      </button>

      {/* Info */}
      <p className="text-xs sm:text-sm text-gray-500 text-center mt-4">
        By signing up, you agree to our Terms of Service, confirm that all
        information you provided is accurate, and acknowledge our Privacy
        Policy.
      </p>
    </div>
  );
}
