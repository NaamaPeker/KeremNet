import React from 'react';
import Post from './post';

const date = new Date();
function App() {
  return (
    <div className="App">
      <Post content= {"hello world"} comments={6} likes={6} author="naama peker" date={date}/>
    </div>
  );
}

export default App;