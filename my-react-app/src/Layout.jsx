import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <h1>My App</h1>
      <Link to="/">Home</Link>
      <div>
        <Link to="contact">Contact</Link>
      </div>
      <div>
        <Link to="about">About</Link>
      </div>
      <Outlet />
    </>
  );
}
