import { useState } from "react";
import "./App.css";
import type { CartItem } from "./types/cart";
import RanselImage from "./assets/Bag.jpeg"
import HoodieImage from "./assets/Hoodie.jpeg"
import TShirtImage from "./assets/T-Shirt.jpeg"
import SearchComponent from "./components/SearchComponent";
import ShowCourseComponent from "./components/ShowCourseComponent";
import UserCartComponent from "./components/UserCartComponent";
import type { Course } from "./types/course";

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
      setCartCourses(latestCartUpdate)
    } else {
      setCartCourses([...cartCourses, {product: course, quantity: 1}])
    }
  };

  const decreaseToCartFunction =  (course: Course) => {
    setCartCourses((prevCartCourses) =>
      prevCartCourses.map((item) => item.product.id === course.id ? {...item, quantity: item.quantity - 1} : item)
      .filter((item) => item.quantity > 0))
  }

  const deleteCourseFromCartFunction = (course: Course) => {
    setCartCourses((prevCartCourses) => 
      prevCartCourses.filter((item) => item.product.id !== course.id)
    )
  }

  const totalAmountCalculationFunction = () : number => {
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
          addCourseToCartFunction={addCourseToCartFunction}
        />
        
        <UserCartComponent
          cartCourses={cartCourses}
          onIncrease={addCourseToCartFunction}
          onDecrease={decreaseToCartFunction}
          onRemove={deleteCourseFromCartFunction}
          totalAmount={totalAmountCalculationFunction()}
        />
      </main>
    </div>
  )
}
export default App;