export const mockProgressData = {
  user: { fullName: 'John Doe', avatarUrl: '/avatar.png', email: 'johndoe@gmail.com' },
  notifications: { unreadCount: 0 },
  kpis: [
    { id: 'sessions', label: 'Total Sessions', value: 12 },
    { id: 'hours', label: 'Hours Learned', value: 18.5 },
    { id: 'avg', label: 'Average Score', value: '91%' },
    { id: 'attendance', label: 'Attendance', value: '75%' },
  ],
  performance: [
    { label: 'Test', value: 85 },
    { label: 'Assignments', value: 55 },
    { label: 'Quiz', value: 62 },
    { label: 'Projects', value: 50 },
    { label: 'Attendance', value: 75 },
  ],
  subjects: [
    { subject: 'Mathematics', detail: 'Algebra Equations', average: 95 },
    { subject: 'Chemistry', detail: 'Chemical Equations', average: 95 },
    { subject: 'Physics', detail: 'Velocity', average: 95 },
  ],
  activity: [
    { date: '28/10/2012', subject: 'Mathematics', topic: 'Algebra', score: '92%', duration: '20 mins' },
    { date: '12/06/2020', subject: 'Physics', topic: 'Velocity', score: '75%', duration: '30 mins' },
    { date: '12/06/2020', subject: 'Literacy', topic: 'Writing', score: '63%', duration: '15 mins' },
    { date: '07/05/2016', subject: 'Mathematics', topic: 'Equations', score: '50%', duration: '27 mins' },
  ],
};
