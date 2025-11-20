'use client'

import { useState } from 'react'
import { Clock } from 'lucide-react'

export default function AssignmentCard({ assignment }) {
  const [showResponse, setShowResponse] = useState(false)
  const [responseText, setResponseText] = useState('')

  const getStatusBgColor = (statusColor) => {
    switch (statusColor) {
      case 'pending':
        return 'bg-orange-100'
      case 'awaiting':
        return 'bg-gray-100'
      case 'completed':
        return 'bg-green-100'
      default:
        return 'bg-gray-100'
    }
  }

  const getStatusTextColor = (statusColor) => {
    switch (statusColor) {
      case 'pending':
        return 'text-orange-700'
      case 'awaiting':
        return 'text-gray-700'
      case 'completed':
        return 'text-green-700'
      default:
        return 'text-gray-700'
    }
  }

  const getActionButtonClass = (color) => {
    switch (color) {
      case 'green':
        return 'bg-green-600 hover:bg-green-700 text-white'
      case 'gray':
        return 'bg-gray-500 hover:bg-gray-600 text-white'
      case 'blue':
        return 'border-2 border-green-600 text-green-600 hover:bg-green-50'
      default:
        return 'bg-gray-500 hover:bg-gray-600 text-white'
    }
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
      {/* Title */}
      <h3 className="text-base font-semibold text-gray-900 mb-3">{assignment.title}</h3>

      {/* Subject and Instructor */}
      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 mb-4">
        <span className="font-medium">{assignment.subject}</span>
        <span>•</span>
        <span>{assignment.instructor}</span>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-700 mb-4">{assignment.description}</p>

      {/* Status and Action Row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-4 border-t border-gray-200">
        <div className="flex flex-wrap items-center gap-3">
          {/* Due Date */}
          <div className={`flex items-center gap-1 text-sm ${
            assignment.dueStatus === 'due' ? 'text-red-600' : 'text-gray-600'
          }`}>
            <Clock className="w-4 h-4" />
            <span className="font-medium">
              {assignment.dueStatus === 'due' && '⚠️ Due:'}
              {assignment.dueStatus !== 'due' && 'Submitted:'}
            </span>
            <span>{assignment.dueDate}</span>
          </div>

          {/* Status Badge */}
          <span className={`text-xs font-medium px-3 py-1 rounded-full ${
            getStatusBgColor(assignment.statusColor)
          } ${getStatusTextColor(assignment.statusColor)}`}>
            {assignment.status}
          </span>
        </div>

        {/* Action Button */}
        <button
          onClick={() => setShowResponse(!showResponse)}
          className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${getActionButtonClass(
            assignment.actionColor
          )}`}
        >
          {assignment.actionButton}
        </button>
      </div>

      {/* Feedback/Response Section */}
      {showResponse && assignment.actionColor === 'blue' && (
        <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
          <h4 className="font-semibold text-gray-900 mb-2">View Feedback</h4>
          <p className="text-sm text-gray-700 mb-3">
            Excellent work on this problem set! Your solutions are clear and well-structured. Keep up the great effort!
          </p>
          <button className="text-green-600 hover:text-green-700 text-sm font-medium">View Full Feedback →</button>
        </div>
      )}

      {/* Add Response Section */}
      {showResponse && assignment.actionColor === 'green' && (
        <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
          <label className="block text-sm font-semibold text-gray-900 mb-2">Add your response:</label>
          <textarea
            value={responseText}
            onChange={(e) => setResponseText(e.target.value)}
            placeholder="Type your solution here..."
            className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
            rows={4}
          />
          <div className="flex gap-3 mt-3">
            <button className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-lg transition-colors">
              Submit
            </button>
            <button
              onClick={() => {
                setShowResponse(false)
                setResponseText('')
              }}
              className="px-6 py-2 bg-gray-300 hover:bg-gray-400 text-gray-900 text-sm font-semibold rounded-lg transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
