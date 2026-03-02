"use client";

import React, { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { courses, lessonSections, quizQuestions } from "@/lib/data";
import Image from "next/image";
import {
  ArrowLeft,
  Play,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Circle,
} from "lucide-react";
import Link from "next/link";

export default function CourseLearnPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = React.use(params);
  const course = courses.find((c) => c.id === id) || courses[0];
  const [activeTab, setActiveTab] = useState<"content" | "review">("content");
  const [expandedSections, setExpandedSections] = useState<string[]>([
    "1",
    "5",
  ]);
  const [activeLesson, setActiveLesson] = useState("1-1");
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, string>
  >({});

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((s) => s !== sectionId)
        : [...prev, sectionId],
    );
  };

  const isQuizActive = activeLesson === "5-1";

  return (
    <MainLayout>
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <Link href={`/courses/${id}`}>
          <button className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-200 bg-white hover:bg-gray-50">
            <ArrowLeft className="w-4 h-4 text-gray-500" />
          </button>
        </Link>
        <h1 className="text-base font-semibold text-gray-800">
          {course.title}
        </h1>
      </div>

      <div className="flex gap-5">
        {/* Left - Main Content */}
        <div className="flex-1 min-w-0">
          {/* Video Player */}
          <div className="relative w-full h-64 rounded-xl overflow-hidden bg-gray-800 mb-4">
            <Image
              src={course.image}
              alt={course.title}
              fill
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-100 transition-all">
                <Play className="w-5 h-5 text-gray-800 ml-0.5" />
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-5">
            <button
              onClick={() => setActiveTab("content")}
              className={`text-sm px-4 pb-3 font-medium transition-colors ${
                activeTab === "content"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              Course Content
            </button>
            <button
              onClick={() => setActiveTab("review")}
              className={`text-sm px-4 pb-3 font-medium transition-colors ${
                activeTab === "review"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              Review/Feedbacks
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === "content" && (
            <>
              {isQuizActive ? (
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-4">
                    Quiz
                  </p>
                  <div className="space-y-5">
                    {quizQuestions.map((q, index) => (
                      <div
                        key={q.id}
                        className="bg-white rounded-xl border border-gray-100 p-5"
                      >
                        <div className="flex items-start gap-3 mb-4">
                          <div className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center flex-shrink-0 font-medium">
                            {index + 1}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-800 mb-1">
                              {q.question}
                            </p>
                            <p className="text-xs text-gray-400 flex items-center gap-1">
                              {q.type}
                              <span className="inline-flex items-center gap-0.5">
                                <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block" />
                                {q.points} points
                              </span>
                            </p>
                          </div>
                        </div>
                        {q.isShortAnswer ? (
                          <textarea
                            placeholder="Enter answer here"
                            className="w-full border border-gray-200 rounded-lg p-3 text-sm text-gray-600 outline-none resize-none h-20 placeholder:text-gray-300"
                          />
                        ) : (
                          <div className="space-y-2 ml-9">
                            {q.options?.map((opt, i) => (
                              <button
                                key={i}
                                onClick={() =>
                                  setSelectedAnswers((prev) => ({
                                    ...prev,
                                    [q.id]: opt,
                                  }))
                                }
                                className={`w-full text-left text-sm px-4 py-2.5 rounded-lg border transition-colors ${
                                  selectedAnswers[q.id] === opt
                                    ? "border-blue-500 bg-blue-50 text-blue-700"
                                    : "border-gray-200 text-gray-600 hover:bg-gray-50"
                                }`}
                              >
                                {opt}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex justify-center">
                    <button className="px-16 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                      Submit
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-sm text-gray-600 leading-relaxed">
                  <p className="font-semibold text-gray-800 mb-3">
                    Lesson 1 - Welcome Message
                  </p>
                  <p className="mb-4">
                    Welcome to 'Communicate with Confidence'! In an era where
                    the pace of work is ever-increasing and the demands on our
                    time are relentless, the ability to communicate effectively
                    has never been more crucial. This comprehensive course is
                    meticulously crafted to equip you with the essential skills
                    that will not only enhance your communication abilities but
                    also empower you to thrive in any professional environment
                    you find yourself in.
                  </p>
                  <p className="font-semibold text-gray-800 mb-2">
                    Why Communication Matters
                  </p>
                  <p className="mb-4">
                    Effective communication is the cornerstone of success in the
                    workplace. It is the bridge that connects individuals,
                    teams, and organizations, facilitating collaboration and
                    understanding. In today's diverse and dynamic work settings,
                    the ability to convey your thoughts clearly and listen
                    actively is paramount. This course aims to illuminate the
                    significance of communication and provide you with the tools
                    necessary to master it.
                  </p>
                  <p className="font-semibold text-gray-800 mb-2">
                    What You'll Learn
                  </p>
                  <p className="mb-3">
                    Throughout this course, you will delve into various aspects
                    of communication, each designed to build upon the last,
                    creating a robust foundation for your skills:
                  </p>
                  <p className="mb-2">
                    <span className="font-medium text-gray-800">
                      1. Clear Articulation:
                    </span>{" "}
                    You will learn techniques to express your ideas with clarity
                    and precision, ensuring that your message is understood as
                    intended. This includes understanding your audience and
                    tailoring your message accordingly.
                  </p>
                  <p className="mb-2">
                    <span className="font-medium text-gray-800">
                      2. Active Listening:
                    </span>{" "}
                    Developing the ability to listen actively is crucial. You
                    will practice techniques that enhance your listening skills,
                    enabling you to fully engage with others and respond
                    thoughtfully.
                  </p>
                  <p className="mb-2">
                    <span className="font-medium text-gray-800">
                      3. Confident Conversations:
                    </span>{" "}
                    Navigating challenging discussions can be daunting. This
                    course will provide you with strategies to approach these
                    conversations with poise and assurance, transforming
                    potential conflicts into constructive dialogues.
                  </p>
                  <p className="mb-2">
                    <span className="font-medium text-gray-800">
                      4. Non-Verbal Communication:
                    </span>{" "}
                    Communication is not just about words. You will explore the
                    nuances of non-verbal cues, such as body language and facial
                    expressions, and learn how to utilize them to reinforce your
                    message.
                  </p>
                  <p className="mb-4">
                    <span className="font-medium text-gray-800">
                      5. Persuasive Language:
                    </span>{" "}
                    Crafting compelling arguments is an art. You will learn how
                    to influence others positively through the use of persuasive
                    language, enabling you to advocate for your ideas
                    effectively.
                  </p>
                  <p className="font-semibold text-gray-800 mb-2">
                    Building a Collaborative Environment
                  </p>
                  <p className="mb-4">
                    Mastering these skills will not only enhance your personal
                    communication but will also contribute to building stronger
                    interpersonal relationships within your team. A
                    collaborative work environment is vital for team success,
                    and effective communication is the key to fostering this
                    atmosphere. You will learn how to create an inclusive
                    environment where ideas can flourish, and everyone feels
                    valued.
                  </p>
                  <p className="font-semibold text-gray-800 mb-2">
                    Course Outcomes
                  </p>
                  <p className="mb-2">
                    By the end of this transformative course, you will be
                    equipped to:
                  </p>
                  <p className="mb-1">
                    - Communicate effectively in any situation, whether in
                    meetings, presentations, or casual conversations.
                  </p>
                  <p className="mb-1">
                    - Navigate complex challenges with confidence, turning
                    potential obstacles into opportunities for growth.
                  </p>
                  <p className="mb-4">
                    - Contribute significantly to your organization's success
                    through improved communication practices, fostering a
                    culture of openness and collaboration.
                  </p>
                  <p className="mb-6">
                    Join us on this journey to transform your communication
                    skills and unlock new heights in your career! Together, we
                    will explore the depths of effective communication, ensuring
                    that you emerge not just as a better communicator, but as a
                    leader in your field.
                  </p>
                  <div className="flex justify-center">
                    <button className="px-16 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                      Mark as complete
                    </button>
                  </div>
                </div>
              )}
            </>
          )}

          {activeTab === "review" && (
            <div className="text-sm text-gray-400 text-center py-10">
              No reviews yet.
            </div>
          )}
        </div>

        {/* Right - Lessons Panel */}
        <div className="w-64 flex-shrink-0">
          <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-100">
              <p className="text-xs text-gray-400">Lessons 0/32</p>
            </div>
            <div className="divide-y divide-gray-50">
              {lessonSections.map((section) => (
                <div key={section.id}>
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-sm font-medium text-gray-700">
                      {section.title}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {section.completed && (
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                      )}
                      {expandedSections.includes(section.id) ? (
                        <ChevronUp className="w-4 h-4 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                      )}
                    </div>
                  </button>
                  {expandedSections.includes(section.id) &&
                    section.lessons.length > 0 && (
                      <div className="bg-gray-50 divide-y divide-gray-100">
                        {section.lessons.map((lesson) => (
                          <button
                            key={lesson.id}
                            onClick={() => setActiveLesson(lesson.id)}
                            className={`w-full flex items-center justify-between px-4 py-2.5 hover:bg-gray-100 transition-colors ${
                              activeLesson === lesson.id ? "bg-blue-50" : ""
                            }`}
                          >
                            <span
                              className={`text-xs ${activeLesson === lesson.id ? "text-blue-600 font-medium" : "text-gray-600"}`}
                            >
                              {lesson.title}
                            </span>
                            {lesson.completed ? (
                              <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                            ) : (
                              <Circle className="w-4 h-4 text-gray-300 flex-shrink-0" />
                            )}
                          </button>
                        ))}
                      </div>
                    )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
