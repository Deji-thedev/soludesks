import { Course } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface CourseCardProps {
  course: Course;
}

const categoryColors: Record<string, string> = {
  "Soft Skill": "bg-blue-50 text-blue-600",
  "Compliance & Policy": "bg-green-50 text-green-600",
  "Digital Skills": "bg-purple-50 text-purple-600",
  "Business & Strategy": "bg-orange-50 text-orange-600",
  Onboarding: "bg-pink-50 text-pink-600",
};

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Link href={`/courses/${course.id}`}>
      <div className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
        <div className="relative w-full h-44">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-sm font-semibold text-gray-800 mb-1 leading-snug">
            {course.title}
          </h3>
          <p className="text-xs text-gray-400 mb-3 line-clamp-2 leading-relaxed">
            {course.description}
          </p>
          <span
            className={`text-xs px-2.5 py-1 rounded-full font-medium ${categoryColors[course.category] || "bg-gray-100 text-gray-600"}`}
          >
            {course.category}
          </span>
        </div>
      </div>
    </Link>
  );
}
