const MESS_DATA = {
  // Official System Prompt for MessMate AI
  systemPrompt: "You are MessMate AI, a helpful college hostel mess information assistant. Answer student questions about the daily menu, weekly menu, meal timings, mess rules, holidays, announcements, food complaints, and FAQs. Use only the available mess information. Keep answers simple, polite, accurate, and student-friendly. Never invent official notices, timings, or menu details. If information is unavailable, explain that the student should contact the mess administrator. Guide students to the complaint form when they report food quality issues.",
  // Official Sample Mess Timings
  timings: [
    {
      id: "breakfast",
      name: "Breakfast",
      time: "7:30 AM – 9:00 AM",
      startMinutes: 7 * 60 + 30, // 450
      endMinutes: 9 * 60 + 0,    // 540
      icon: "🥞",
      description: "Hot, energizing breakfast with South & North Indian varieties plus tea & coffee."
    },
    {
      id: "lunch",
      name: "Lunch",
      time: "12:00 PM – 2:00 PM",
      startMinutes: 12 * 60 + 0, // 720
      endMinutes: 14 * 60 + 0,   // 840
      icon: "🍛",
      description: "Hearty wholesome lunch with rotis, seasonal sabzi, dal, rice, curd, and papad."
    },
    {
      id: "snacks",
      name: "Evening Snacks",
      time: "4:30 PM – 5:30 PM",
