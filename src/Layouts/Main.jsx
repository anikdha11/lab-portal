import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <h1>Nav</h1>
      <Outlet></Outlet>
      <h3>Footer</h3>
    </div>
  );
};

export default Main;
