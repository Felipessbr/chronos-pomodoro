import "./styles/global.css";
import "./styles/theme.css";
import { Heading } from "./components/Heading";

function App() {
  return (
    <>
      <Heading attr={123} attr2="string">
        Olá mundo! 1
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        impedit ullam non fugiat. Eius ratione delectus laborum quae itaque
        quasi doloremque alias laboriosam nobis, quia minima explicabo similique
        qui possimus!
      </p>
    </>
  );
}

export { App };
