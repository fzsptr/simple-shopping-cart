import { useState } from "react";
import "./App.css";
import type { CartItem } from "./types/cart";
import type { Course } from "./types/course";
import PantsImage from "./assets/Pants.jpeg"
import RanselImage from "./assets/Bag.jpeg"
import HoodieImage from "./assets/Hoodie.jpeg"
import TShirtImage from "./assets/T-Shirt.jpeg"
import ShoesImage from "./assets/Shoes.jpeg"
import SearchComponent from "./components/SearchComponent";
import ShowCourseComponent from "./components/ShowCourseComponent";

function App() {
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: "T-Shirt",
      price: 150,
      image: TShirtImage,
    },
    {
      id: 2,
      name: "Ransel",
      price: 856,
      image: RanselImage,
    },
    {
      id: 3,
      name: "Hoodie",
      price: 750,
      image: HoodieImage,
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
        <SearchComponent searchCourse={searchCourse} courseSearchUserFunction={courseSearchUserFunction}/>
      <main className="App-main">
        <ShowCourseComponent
          courses={courses}
          filterCourseFunction={filterCourseFunction}
          addCourseToCartFunction={addCourseToCartFunction}/>
      </main>
    </div>
  )
}
export default App;