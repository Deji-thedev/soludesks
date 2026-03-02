import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
}

interface Profile {
  id: string;
  name: string;
  email: string;
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getCourses: builder.query<Course[], void>({
      queryFn: () => ({
        data: [
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
        ],
      }),
    }),
    getProfile: builder.query<Profile, void>({
      queryFn: () => ({
        data: {
          id: "1",
          name: "Madison Greg",
          email: "madison.reert@example.com",
        },
      }),
    }),
  }),
});

export const { useGetCoursesQuery, useGetProfileQuery } = apiSlice;
