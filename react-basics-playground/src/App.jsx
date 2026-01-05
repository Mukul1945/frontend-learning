import JSXDemo from "./components/JSXDemo";
import PropsDemo from "./components/PropsDemo";
import StateDemo from "./components/StateDemo";
import EventHandling from "./components/EventHandling";
import ConditionalRendering from "./components/ConditionalRendering";
import ListRendering from "./components/ListRendering";
import UseEffectDemo from "./components/UseEffectDemo";
import ControlledForm from "./components/ControlledForm";

function App() {
  return (
    <>
      <JSXDemo />
      <PropsDemo title="Props Example" />
      <StateDemo />
      <EventHandling />
      <ConditionalRendering isLoggedIn={true} />
      <ListRendering />
      <UseEffectDemo />
      <ControlledForm />
    </>
  );
}

export default App;
