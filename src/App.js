// Functional component
// Component name should be in uppercase

// Component consist of JS business logic + Component UI
// function App() {
//   // Business/JS logic here
//   console.log('I am Learning react');

//   function calculateMass() {
//     return 100;
//   }

//   console.log(calculateMass());

//   return (
//     <div>
//       <header>Header</header>
//       <section>Body</section>
//       <footer>Foooter</footer>
//     </div>
//   );
// }

// IN REACT COMPONENT I AM NOT IN NEED OF ?
// Arguments  - Explained you this
// this keyword
// super 
// new keyword

// Arrow function is recommended to create components
const App = () => {
  // Business/JS logic here
  console.log('I am Learning react');

  function calculateMass() {
    return 100;
  }

  console.log(calculateMass());
  return (
    <div>
      <header>Header</header>
      <section>Body</section>
      <footer>Foooter</footer>
    </div>
  );
};

export default App;

// very important interview question
// Difference between arrow and normal function ?


// Interview question ?
// What is components and types of components in React JS ?
// Create 1 file 
// Write question and theory answer of it using comments 
// Then coding example [2 atleast]