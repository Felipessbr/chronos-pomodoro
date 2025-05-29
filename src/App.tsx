import "./styles/global.css";
import "./styles/theme.css";

import { Container } from "./components/Container";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";
import { PlayIcon } from "lucide-react";
import { DefaultInput } from "./components/DefaultInput";


function App() {
  return (
    <>
      <Container>
        <Logo/>
      </Container>

      <Container>
        <Menu/>
      </Container>
      
      <Container>
        <CountDown/>
      </Container>

      <Container>
       <form className="form" action="">
        <div className="formRow">
          <DefaultInput labelText="tesk" id="meuInput" type="text" required/>
        </div>

        <div className="formRow">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Ciclos</p>
        </div>

        <div className="formRow">
          <p>0 0 0 0 0 0 0 0</p>
        </div>

        <div className="formRow">
          <button>
            <PlayIcon/>
          </button>
        </div>

       </form>
      </Container>

    </>
  );
}

export { App };
