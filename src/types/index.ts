export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
}

export interface Learner {
  id: string;
  name: string;
  city: string;
  email: string;
  avatar?: string;
}

export interface Lesson {
  id: string;
  title: string;
  completed: boolean;
}

export interface LessonSection {
  id: string;
  title: string;
  completed: boolean;
  lessons: Lesson[];
}
