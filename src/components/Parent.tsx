import { Link, Outlet } from "react-router-dom";

const Parent = () => {
  const _ = "";
  return (
    <div>
      <h1>Parent</h1>
      <Link to="child-1">GO TO CHILD 1</Link>
      <Link to="child-2">GO TO CHILD 2</Link>
      <Outlet />
    </div>
  );
};

export default Parent;
