import React from "react";

type SearchComponentProps = {
    searchCourse: string,
    courseSearchUserFunction: React.ChangeEventHandler<HTMLInputElement>
}

function SearchComponent({ searchCourse, courseSearchUserFunction } : SearchComponentProps) {

  return (
    <header className="App-header">
        <h1>Shopping Cart</h1>
        <div className="search-bar">
            <input 
                type="text"
                placeholder="Search for product"
                value={searchCourse}
                onChange={courseSearchUserFunction}
            />
        </div>
    </header>
  )
}
export default SearchComponent;
