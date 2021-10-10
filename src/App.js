import React from 'react';
import DefaultHOC from './HOC/Default.HOC';

function HomePage() {
  return <>
    <h1 className="text-8xl">Home🏡</h1>
  </>
}

function ContactPage() {
  return <>
    <h1 className="text-6xl">ContactPage✉</h1>
  </>;
}

function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage} />
      <DefaultHOC path="/contact" exact component={ContactPage} />
    </>
  );
}

export default App;
