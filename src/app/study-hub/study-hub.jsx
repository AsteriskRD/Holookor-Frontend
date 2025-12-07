'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ChevronDown } from 'lucide-react'
import AssignmentCard from './assignment-card'

export default function StudyHub() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('assignments')
  const [filterOpen, setFilterOpen] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState('All Assignments')
  const [filter, setFilter] = useState("All Assignments")
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const assignmentData = [
    {
      id: 1,
      title: 'Quadratic Equations Problem Set',
      subject: 'Mathematics',
      instructor: 'Dr. Sarah Johnson',
      description: 'Complete problems 1 - 20 from chapter 5. Show all working and explain your reasoning.',
      dueDate: '11th Nov 2025',
      dueStatus: 'due',
      isOverdue: true, // For red color
      status: 'Pending',
      statusColor: "pending",
      statusDot: "bg-yellow-500",
      actionButton: 'Submit',
      actionColor: 'green',
    },
    {
      id: 2,
      title: 'Binary Search Tree Implementation',
      subject: 'Computer Science',
      instructor: 'Prof. Michael Chen',
      description: 'Implement a balanced BST with insert, delete, and search operations.',
      dueDate: '10th Nov 2025',
      dueStatus: 'submitted',
      status: 'Awaiting Grade',
      statusColor: 'awaiting',
      actionButton: 'Submitted',
      actionColor: 'gray',
      actionType: "submitted",
      isSubmitted: true,
    },
    {
      id: 3,
      title: 'Quadratic Equations Problem Set',
      subject: 'Mathematics',
      instructor: 'Dr. Sarah Johnson',
      description: 'Complete problems 1 - 20 from chapter 5. Show all working and explain your reasoning.',
      dueDate: '11th Nov 2025',
      dueStatus: 'submitted',
      status: 'Graded: 92%',
      statusColor: "text-gray-700 font-bold",
      statusDot: "completed",
      actionButton: 'View Feedback',
      actionColor: 'blue',
      actionType: "outline",
      isSubmitted: true,
      isOverdue: false,
    },
  ]

  return (
    <main className="min-h-screen bg-white px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content - Left Side */}
          <div className="flex-1 min-w-0">
            {/* Header */}
            <div className="mb-8 flex justify-between items-center p-4">
              <div>
              <h1 className="text-lg sm:text-2xl font-bold text-gray-900 mb-1">Study Hub</h1>
              <p className="text-gray-500 text-sm">Assignments, Quiz and Study Materials</p>
              </div>
              <div>
                  {/* Mobile AI Assistant */}
                <div className="lg:hidden bg-white rounded-xl border border-gray-200 p-6 mt-8">
                <h3 className="text-lg font-bold text-gray-900 mb-2">AI Study Assistant</h3>
                <p className="text-sm text-gray-600 mb-6">
                  Get homework help, practice quizzes, and study tips
                </p>
                <button
                onClick={() => router.push('/ai-assistant')}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors"
                >
                Get Started
                </button>
                </div>
                {/* Sidebar - AI Study Assistant */}
                <div className="hidden lg:block w-full p-4 border border-gray-300 rounded-lg">
                  <div className="flex w-full gap-4">
                    <div className="">
                      <h3 className="text-lg font-bold text-gray-900">AI Study Assistant</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Get homework help, practice quizzes, and study tips
                      </p>
                    </div>

                    <button
                      onClick={() => router.push('/ai-assistant')}
                      className="px-4 bg-[#3da755] hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition-colors"
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-3 mb-8">
              <button
                onClick={() => setActiveTab('assignments')}
                className={`px-4 py-2 rounded-md font-medium text-sm transition-all ${
                  activeTab === 'assignments'
                    ? 'bg-green-100 text-green-900'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                Assignments
              </button>
              <button
                onClick={() => setActiveTab('quiz')}
                className={`px-4 py-2 rounded-md font-medium text-sm transition-all flex items-center gap-2 ${
                  activeTab === 'quiz'
                    ? 'bg-green-100 text-green-700 border-2 border-green-600'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                Quiz
                <span className="bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </button>
              <button
                onClick={() => setActiveTab('resources')}
                className={`px-4 py-2 rounded-md font-medium text-sm transition-all flex items-center gap-2 ${
                  activeTab === 'resources'
                    ? 'bg-green-100 text-green-700 border-2 border-green-600'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                Resources
                <span className="bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </button>
            </div>

            {/* Filter Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
              <h2 className="text-base font-semibold text-gray-900">All Assignments (3)</h2>
              <div className="relative">
                <button
                  onClick={() => setFilterOpen(!filterOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-50 transition-colors text-gray-700 text-sm bg-gray-100"
                >
                  {selectedFilter}
                  <ChevronDown className="w-4 h-4" />
                </button>
                {filterOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                    {['All Assignments', 'Pending', 'Completed'].map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          setSelectedFilter(option)
                          setFilterOpen(false)
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700 text-sm"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Assignment Cards */}
            <div className="space-y-4">
              {assignmentData.map((assignment) => (
                <AssignmentCard key={assignment.id} assignment={assignment} />
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    </main>
  )
}

