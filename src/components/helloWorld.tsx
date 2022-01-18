import { RiFocusFill } from "react-icons/ri";
import Input from "./Input";

const helloWorld = () => (
    <div className="container">
      <Input label="hello" endIcon={RiFocusFill} />
    </div>
  );

export default helloWorld;
