import React from "react";

function sayHello() {
  console.log("Hello!");
}

function sayBye(){
    console.log("Bye!")
}

function handleDblClick(){
    console.log("Double Clicked!")
}

const Event = () => {
  return (
    <div>
      <button onClick={sayHello}>Click Me!</button>
      <p onMouseOver={sayBye}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo culpa,
        mollitia doloremque repellat laudantium at iste iure quod quidem quam
        consequatur explicabo officia delectus pariatur commodi alias fuga ad
        harum.
      </p>

      <button onDoubleClick={handleDblClick}>Double Click Me!</button>
    </div>
  );
};

export default Event;
