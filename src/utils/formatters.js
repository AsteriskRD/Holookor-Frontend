// String formatting functions for the dashboard

export const formatTime = (date) => {
  return date.toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    minute: '2-digit',
    hour12: true 
  });
};

export const formatDuration = (minutes) => {
  if (minutes < 60) {
    return `${minutes} min`;
  }
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return remainingMinutes > 0 ? `${hours}h ${remainingMinutes}min` : `${hours}h`;
};

export const formatPercentage = (value) => {
  return `${Math.round(value)}%`;
};

export const formatPercentageChange = (value, trend) => {
  const sign = trend === 'up' ? '+' : trend === 'down' ? '-' : '';
  return `${sign}${Math.abs(value)}%`;
};

export const formatSubjectName = (subject) => {
  return subject;
};

export const formatDifficultyLevel = (level) => {
  return level;
};