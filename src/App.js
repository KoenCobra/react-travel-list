import { Form } from "./components/form";
import { Logo } from "./components/logo";
import { PackingList } from "./components/packingList";
import { Stats } from "./components/stats";

export default function App() {
  return (
    <div className='app'>
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}
