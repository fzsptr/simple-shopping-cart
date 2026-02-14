import type { Course } from "./course";

export interface ShowCourseComponentProps {
    courses: Course[]
    filterCourseFunction: Course[]
    addCourseToCartFunction: (course: Course) => void
}