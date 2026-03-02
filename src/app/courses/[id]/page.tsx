"use client";

import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { courses, learners } from "@/lib/data";
import { ArrowLeft, Users, UserCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CourseDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = React.use(params);
  const course = courses.find((c) => c.id === id) || courses[0];

  return (
    <MainLayout>
      {/* Back + Title */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <Link href="/courses">
            <button className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-200 bg-white hover:bg-gray-50">
              <ArrowLeft className="w-4 h-4 text-gray-500" />
            </button>
          </Link>
          <h1 className="text-base font-semibold text-gray-800">
            {course.title}
          </h1>
          <span className="text-xs bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full font-medium">
            {course.category}
          </span>
        </div>
        <Link href={`/courses/${id}/learn`}>
          <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Start Learning
          </button>
        </Link>
      </div>

      {/* Banner Image */}
      <div className="relative w-full h-56 rounded-xl overflow-hidden mb-6">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white rounded-xl border border-gray-100 p-4 flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
            <Users className="w-5 h-5 text-green-500" />
          </div>
          <div>
            <p className="text-xs text-gray-400 mb-0.5">Total Applicants</p>
            <p className="text-xl font-bold text-gray-800">1223</p>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-4 flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
            <UserCheck className="w-5 h-5 text-blue-500" />
          </div>
          <div>
            <p className="text-xs text-gray-400 mb-0.5">Active Learners</p>
            <p className="text-xl font-bold text-gray-800">13</p>
          </div>
        </div>
      </div>

      {/* Learners Table */}
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left text-xs text-gray-400 font-medium px-5 py-3">
                Name
              </th>
              <th className="text-left text-xs text-gray-400 font-medium px-5 py-3">
                City
              </th>
              <th className="text-left text-xs text-gray-400 font-medium px-5 py-3">
                Email Address
              </th>
              <th className="text-left text-xs text-gray-400 font-medium px-5 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {learners.map((learner) => (
              <tr
                key={learner.id}
                className="border-b border-gray-50 hover:bg-gray-50 transition-colors"
              >
                <td className="px-5 py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-orange-400 flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">
                      {learner.name.charAt(0)}
                    </div>
                    <span className="text-gray-700 text-sm">
                      {learner.name}
                    </span>
                  </div>
                </td>
                <td className="px-5 py-3 text-gray-500 text-sm">
                  {learner.city}
                </td>
                <td className="px-5 py-3 text-gray-500 text-sm">
                  {learner.email}
                </td>
                <td className="px-5 py-3">
                  <button className="w-6 h-6 rounded border border-gray-200 flex items-center justify-center hover:bg-gray-100">
                    <span className="text-gray-400 text-xs">⋯</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Table Footer */}
        <div className="flex items-center justify-between px-5 py-3">
          <span className="text-xs text-gray-400">Show 10/page</span>
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <span>Prev</span>
            {[1, 2, 3, 4, 5].map((p) => (
              <button
                key={p}
                className={`w-6 h-6 rounded-full ${p === 1 ? "bg-blue-600 text-white" : "hover:bg-gray-100"}`}
              >
                {p}
              </button>
            ))}
            <span>...</span>
            <button className="w-6 h-6 rounded-full hover:bg-gray-100">
              24
            </button>
            <span>Next</span>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
