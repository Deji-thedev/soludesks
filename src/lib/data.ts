import { Course, Learner, LessonSection } from "@/types";

export const courses: Course[] = [
  {
    id: "1",
    title: "Effective Workplace Communication",
    description:
      "Upon completion of this module, participants will implement practical communication techniques.",
    category: "Soft Skill",
    image:
      "https://images.unsplash.com/photo-1552581234-26160f608093?w=400&h=200&fit=crop",
  },
  {
    id: "2",
    title: "Mastering Interpersonal Skills",
    description:
      "Upon completion of this module, participants will implement practical communication techniques.",
    category: "Compliance & Policy",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=200&fit=crop",
  },
  {
    id: "3",
    title: "Strengthening Team Cohesion",
    description:
      "Upon completion of this module, participants will implement practical communication techniques.",
    category: "Soft Skill",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=200&fit=crop",
  },
  {
    id: "4",
    title: "Enhancing Team Dialogue",
    description:
      "Upon completion of this module, participants will implement practical communication techniques.",
    category: "Digital Skills",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=200&fit=crop",
  },
  {
    id: "5",
    title: "Optimizing Group Dynamics",
    description:
      "Upon completion of this module, participants will implement practical communication techniques.",
    category: "Business & Strategy",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=200&fit=crop",
  },
  {
    id: "6",
    title: "Cultivating Open Communication",
    description:
      "Upon completion of this module, participants will implement practical communication techniques.",
    category: "Onboarding",
    image:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400&h=200&fit=crop",
  },
];

export const learners: Learner[] = [
  {
    id: "1",
    name: "Nithya Menon",
    city: "New York",
    email: "nithya.menon@email.com",
  },
  {
    id: "2",
    name: "Meera Gonzalez",
    city: "Toronto",
    email: "meera.gonzalez@email.com",
  },
  {
    id: "3",
    name: "Monica Patel",
    city: "Paris",
    email: "monica.patel@email.com",
  },
  {
    id: "4",
    name: "Dinesh Kumar",
    city: "Tokyo",
    email: "dinesh.kumar@email.com",
  },
  {
    id: "5",
    name: "Karthik Subramanian",
    city: "London",
    email: "karthik.subramanian@email.com",
  },
  {
    id: "6",
    name: "Monica Patel",
    city: "Paris",
    email: "jagathesh.narayanan@email.com",
  },
  {
    id: "7",
    name: "Jagathesh Narayanan",
    city: "Berlin",
    email: "jagathesh.narayanan@email.com",
  },
  {
    id: "8",
    name: "Monica Patel",
    city: "Paris",
    email: "monica.patel@email.com",
  },
  {
    id: "9",
    name: "Nithya Menon",
    city: "New York",
    email: "nithya.menon@email.com",
  },
  {
    id: "10",
    name: "Jagathesh Narayanan",
    city: "Tokyo",
    email: "jagathesh.narayanan@email.com",
  },
];

export const lessonSections: LessonSection[] = [
  {
    id: "1",
    title: "Introduction",
    completed: false,
    lessons: [
      { id: "1-1", title: "Welcome Message", completed: true },
      { id: "1-2", title: "A Note on Style", completed: true },
      { id: "1-3", title: "What You'll Learn", completed: true },
      { id: "1-4", title: "Meet Your Instructor", completed: true },
    ],
  },
  {
    id: "2",
    title: "Setting Up Your Workspace",
    completed: true,
    lessons: [],
  },
  {
    id: "3",
    title: "Navigating the Course",
    completed: true,
    lessons: [],
  },
  {
    id: "4",
    title: "Course Resources",
    completed: true,
    lessons: [],
  },
  {
    id: "5",
    title: "Assessment",
    completed: false,
    lessons: [{ id: "5-1", title: "Quiz", completed: false }],
  },
];

export const quizQuestions = [
  {
    id: 1,
    question: "What is the purpose of React Hooks?",
    type: "Multiple Choice",
    points: 4,
    options: [
      "A. To use state and other React features in functional components",
      "B. To create class components",
      "C. To style React components",
      "D. To handle routing in React applications",
    ],
  },
  {
    id: 2,
    question: "Which hook is used for side effects in React?",
    type: "Multiple Choice",
    points: 4,
    options: [
      "A. To use state and other React features in functional components",
      "B. To create class components",
      "C. To style React components",
      "D. To handle routing in React applications",
    ],
  },
  {
    id: 3,
    question: "Explain the Virtual DOM and its benefits",
    type: "Short answer",
    points: 10,
    isShortAnswer: true,
  },
  {
    id: 4,
    question: "What is the purpose of React Hooks?",
    type: "Multiple Choice",
    points: 4,
    options: [
      "A. To use state and other React features in functional components",
      "B. To create class components",
      "C. To style React components",
      "D. To handle routing in React applications",
    ],
  },
  {
    id: 5,
    question: "Which hook is used for side effects in React?",
    type: "Multiple Choice",
    points: 4,
    options: [
      "A. To use state and other React features in functional components",
      "B. To create class components",
      "C. To style React components",
      "D. To handle routing in React applications",
    ],
  },
  {
    id: 6,
    question: "Explain the Virtual DOM and its benefits",
    type: "Short answer",
    points: 10,
    isShortAnswer: true,
  },
];
