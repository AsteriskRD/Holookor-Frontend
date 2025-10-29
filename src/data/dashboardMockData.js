// Mock data for the dashboard

// Data for global state store
export const mockStore = {
  user: {
    name: 'Alex',
    fullName: 'John Doe',
    email: 'johndoe@gmail.com',
    avatarUrl: 'https://i.pravatar.cc/150?img=12'
  },
  notifications: {
    unreadCount: 3
  }
};

// Data returned by API queries
export const mockQuery = {
  dashboardStats: {
    totalSessions: 12,
    hoursLearned: 18.5,
    averageScore: 91,
    certificates: 3
  },
  upcomingSession: {
    id: 'session-1',
    subject: 'Mathematics',
    topic: 'Quadratic Equations',
    tutorName: 'Dr. Sarah',
    scheduledTime: new Date('2024-01-15T14:00:00'),
    duration: 60,
    status: 'upcoming'
  },
  todaySessions: [
    {
      id: 'session-1',
      subject: 'Mathematics',
      tutorName: 'Dr. Sarah Johnson',
      topic: 'Algebra Equations',
      scheduledTime: new Date('2024-01-15T14:00:00'),
      duration: 60,
      status: 'upcoming'
    },
    {
      id: 'session-2',
      subject: 'Chemistry',
      tutorName: 'Dr. Emily Brown',
      topic: 'Chemical Equations',
      scheduledTime: new Date('2024-01-15T16:00:00'),
      duration: 60,
      status: 'upcoming'
    },
    {
      id: 'session-3',
      subject: 'Physics',
      tutorName: 'Dr. Lara Croft',
      topic: 'Velocity',
      scheduledTime: new Date('2024-01-15T18:00:00'),
      duration: 80,
      status: 'upcoming'
    }
  ],
  weeklyPerformance: [
    {
      subject: 'Mathematics',
      percentage: 92,
      change: 3,
      trend: 'up'
    },
    {
      subject: 'Physics',
      percentage: 87,
      change: 1,
      trend: 'up'
    },
    {
      subject: 'Chemistry',
      percentage: 95,
      change: 8,
      trend: 'up'
    },
    {
      subject: 'Biology',
      percentage: 89,
      change: 10,
      trend: 'up'
    }
  ],
  aiRecommendations: [
    {
      id: 'rec-1',
      title: 'Calculus Practice Quiz',
      description: 'Based on your recent solution, practice these problems',
      difficulty: 'Medium',
      type: 'quiz'
    }
  ],
  dailyStreak: {
    currentStreak: 7,
    streakDays: [true, true, true, true, true, true, true]
  }
};

// Data passed as props to the root component
export const mockRootProps = {};