import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import cartData from "./data";
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineUp } from "react-icons/ai";
import CartContainer from "./CartContainer";

function App() {
  return (
    <div className="container">
      <div className="row row-bg">
        <div className="col-md-8 col-sm-10 mx-auto">
          <CartContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
