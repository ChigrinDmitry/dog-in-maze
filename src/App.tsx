import "./App.css";
import Ball from "./components/ball/Ball";
import { Maze } from "./components/maze/Maze";
import { Rectangle } from "./components/rectangle/Rectangle";

const App = () => (
  <div>
    <h1>Dog and ball</h1>
    <Rectangle>
      <Maze />
      <Ball />
    </Rectangle>
  </div>
);

export default App;
