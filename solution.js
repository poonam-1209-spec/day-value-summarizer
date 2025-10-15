function solution(D) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const result = {};
  const sums = {};
  
  // Step 1: Sum values for each day of the week
  for (const [dateStr, value] of Object.entries(D)) {
    const dayIndex = new Date(dateStr).getDay(); // 0=Sun, ..., 6=Sat
    const dayName = days[dayIndex];
    sums[dayName] = (sums[dayName] || 0) + value;
  }

  // Step 2: Copy sums into result (ensure all 7 days exist)
  days.forEach(day => {
    result[day] = sums[day] ?? null; // null if missing
  });

  // Step 3: Fill missing days using mean of previous and next existing days
  for (let i = 0; i < 7; i++) {
    if (result[days[i]] === null) {
      // Find previous available value
      let prevIndex = (i - 1 + 7) % 7;
      while (result[days[prevIndex]] === null) {
        prevIndex = (prevIndex - 1 + 7) % 7;
      }

      // Find next available value
      let nextIndex = (i + 1) % 7;
      while (result[days[nextIndex]] === null) {
        nextIndex = (nextIndex + 1) % 7;
      }

      // Mean of prev and next
      result[days[i]] = Math.round((result[days[prevIndex]] + result[days[nextIndex]]) / 2);
    }
  }

  return result;
}

module.exports = solution;
