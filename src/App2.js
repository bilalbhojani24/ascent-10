import React from 'react';

export class App2 extends React.Component {
  // business logic
  render() {
    // business logic

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
  }
}

export default App2;
