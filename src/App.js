import React from "react";


function Food({fav}){
  console.log(fav);
  return<h1>I Like Potato</h1>
}
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food 
      fav="kimchi"
      />
    </div>
  );
}

export default App;
