import type { CartItem } from "./cart";
import type { Course } from "./course";

export interface UserCartProps {
    cartCourses: CartItem[]
    onIncrease: (course: Course) => void
    onDecrease: (course: Course) => void
    onRemove: (course: Course) => void
    totalAmount: number
}