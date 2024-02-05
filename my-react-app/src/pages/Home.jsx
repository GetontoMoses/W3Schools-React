import Login from "../Hooks/UseState";
import UserC from "../Hooks/UseContext";
export default function Home() {
  return (
    <>
      <Login/>
      <UserC/>
    </>
  );
}