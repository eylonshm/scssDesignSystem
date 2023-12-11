import React from "react";
import "../styles/_index.scss";
import "./App.scss";
import WorkBox from "./components/WorkBox";
import { useCallback, useState } from "react";
import AnotherButton from "./components/AnotherButton";

// eslint-disable-next-line react/prop-types
const AnotherComponent = ({ onClick }) => {
  console.log("render");
  return (
    <div>
      {console.dir(onClick)}
      <p>Text</p>
      <p>Another text</p>
      <button onClick={onClick} data-cy="counter-dec-btn">
        Dec
      </button>
    </div>
  );
};

const MemoizedAnotherComp = React.memo(
  AnotherComponent,
  (prevProps, nextProps) => {
    if (prevProps.onClick === nextProps.onClick) {
      return true; // props are equal
    }
    return false; // props are not equal -> update the component
  }
);

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState();
  const [count, setCount] = useState(0);
  const increment = () => {
    // eslint-disable-next-line no-debugger
    setCount((count) => count + 1);
    // eslint-disable-next-line no-debugger
  };

  const dec = useCallback(() => {
    if (count === 0) return;
    setCount((count) => count - 1);
  }, [count]);

  const changeTheme = () => {
    setIsDarkTheme((dark) => !dark);
  };

  return (
    <div className={`app ${isDarkTheme ? "dark-theme" : "light-theme"}`}>
      <WorkBox onClick={increment} />
      <p data-cy="counter">Count: {count}</p>
      <button onClick={changeTheme}>Change Theme</button>
      <AnotherButton text="Click" />
      <MemoizedAnotherComp onClick={dec} />
    </div>
  );
}

export default App;
