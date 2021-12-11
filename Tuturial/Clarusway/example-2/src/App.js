import "./App.css";
// import Navi from "./comp-1/Navi";
// import Body from "./comp-1/Body";
import { useState, useEffect } from "react";

function Card({ isFavorite, id, setFavList }) {
  const [flag, setFlag] = useState(true);
  const [count, setCount] = useState(0);
  const changeColor = () => {
    setFlag((prev) => !prev);
    setCount((prev) => prev + 1);
  };
  //console.log(isFavorite, id);

  return (
    <div
      className="container"
      style={{ background: isFavorite ? "red" : "white" }}
    >
      <div className={flag ? "AppFavorite" : "App"}>
        <p>Example</p>
      </div>
      <div className="App">
        <button disabled={count >= 5} onClick={changeColor}>
          {/* <button disabled={count >= 5 ? true : false} onClick={changeColor}></button> */}
          Click
        </button>
        <button
          onClick={() => {
            setFavList((prev) => {
              if (prev.includes(id)) {
                //if id in prev, remove id from prev
                const filteredArray = prev.filter((favId) => favId != id);
                localStorage.setItem("favList", JSON.stringify(filteredArray));
                return filteredArray;
              } else {
                localStorage.setItem("favList", JSON.stringify([...prev, id]));
                return [...prev, id];
              }
            });
          }}
        >
          addToFavorite
        </button>
        {/*   if count > 5 show warning text */}

        {count >= 5 ? <p>You clicked more than 5</p> : ""}
      </div>
    </div>
  );
}

const App = () => {
  const myArr = [1, 2, 3, 4, 5];
  const [favList, setFavList] = useState([]);
  const fetchData = () => {
    const response = localStorage.getItem("favList"); //it has to be same with local storage key
    if (!response) {
      return;
    }
    setFavList(JSON.parse(response));
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(favList);
  return (
    <>
      {myArr.map((idNum, index) => (
        <Card
          isFavorite={favList.includes(idNum)}
          setFavList={setFavList}
          id={idNum}
          key={index}
        />
      ))}
    </>
  );
};

export default App;
