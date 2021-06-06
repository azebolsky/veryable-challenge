import "./App.css";
import Navbar from "components/Navbar";
import Users from "components/Users";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="user-component-container">
        <Users />
      </div>
    </>
  );
};

export default App;
