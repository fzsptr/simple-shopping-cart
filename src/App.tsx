import { useState } from "react";
import "./App.css";
import type { CartItem } from "./types/cart";
import type { Course } from "./types/course";
import PantsImage from "./assets/Pants.jpeg"
import RanselImage from "./assets/Bag.jpeg"
import HoodieImage from "./assets/Hoodie.jpeg"
import TShirtImage from "./assets/T-Shirt.jpeg"
import ShoesImage from "./assets/Shoes.jpeg"

function App() {
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: "T-Shirt",
      price: 499,
      image: TShirtImage,
    },
    {
      id: 2,
      name: "Ransel",
      price: 699,
      image: RanselImage,
    },
    {
      id: 3,
      name: "Hoodie",
      price: 799,
      image: HoodieImage,
    },
    {
      id: 4,
      name: "Baggy Jeans",
      price: 399,
      image: PantsImage
    },
    {
      id: 5,
      name: "Adidas",
      price: 999,
      image: ShoesImage
    }
  ]);

  const [cartCourses, setCartCourses] = useState<CartItem[]>([]);
  const [searchCourse, setSearchCourse] = useState("");

  const addCourseToCartFunction = (course: Course) => {
    const alreadyCourses = cartCourses.find(item => item.product.id === course.id)
    
    if(alreadyCourses) {
      const latestCartUpdate = cartCourses.map(item => 
        item.product.id === course.id ? {...item, quantity: item.quantity + 1} : item)
    } else {
      setCartCourses([...cartCourses, {product: course, quantity: 1}])
    }
  };

  const deleteCourseFromCartFunction = (course: Course) => {
    const updatedCart = cartCourses.filter(item => item.product.id !== course.id)
    setCartCourses(updatedCart)
  }

  const totalAmountCalculationFunction = () => {
    return cartCourses.reduce((total, item) => total + item.product.price * item.quantity, 0) 
  }

  const courseSearchUserFunction: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchCourse(event.target.value)
  }

  const filterCourseFunction = courses.filter((course) => 
    course.name.toLowerCase().includes(searchCourse.toLowerCase())
  )

  return (
    <div className="App">

      <main className="App-main">
        
      </main>
    </div>
  )
}
export default App;