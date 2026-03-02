"use client";

import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import CourseCard from "@/components/courses/CourseCard";
import StatsCard from "@/components/courses/StatsCard";
import Pagination from "@/components/courses/Pagination";
import { courses } from "@/lib/data";
import {
  Search,
  BookOpen,
  Users,
  BarChart2,
  Calendar,
  ChevronDown,
} from "lucide-react";

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = courses.filter((c) =>
    c.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <MainLayout>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-lg font-bold text-gray-800">Course Management</h1>
        <p className="text-sm text-gray-400">
          Create, organize, and assign courses to teams and individuals
        </p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <StatsCard
          label="Total courses"
          value="123"
          icon={<BookOpen className="w-5 h-5 text-blue-500" />}
        />
        <StatsCard
          label="Total Enrollments"
          value="11"
          icon={<Users className="w-5 h-5 text-blue-500" />}
        />
        <StatsCard
          label="Avg Completion"
          value="99%"
          trend="↑ 10% up for last month"
          icon={<BarChart2 className="w-5 h-5 text-blue-500" />}
        />
      </div>

      {/* Search & Filter Bar */}
      <div className="flex items-center justify-between mb-5 gap-4">
        <div className="flex items-center bg-white border border-gray-200 rounded-lg px-3 py-2 gap-2 flex-1 max-w-sm">
          <Search className="w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search Course"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent text-sm text-gray-600 outline-none w-full placeholder:text-gray-400"
          />
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 text-sm text-gray-500 bg-white border border-gray-200 rounded-lg px-3 py-2">
            <Calendar className="w-4 h-4" />
            Date
          </button>
          <button className="flex items-center gap-2 text-sm text-gray-500 bg-white border border-gray-200 rounded-lg px-3 py-2">
            Category
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-3 gap-5 mb-6">
        {filtered.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      {/* Footer Row */}
      <div className="flex items-center justify-between">
        <button className="flex items-center gap-1 text-sm text-gray-500 bg-white border border-gray-200 rounded-lg px-3 py-2">
          Show 10/page
          <ChevronDown className="w-4 h-4" />
        </button>
        <Pagination
          current={currentPage}
          total={24}
          onPageChange={setCurrentPage}
        />
      </div>
    </MainLayout>
  );
}
