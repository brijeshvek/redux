import './App.css';
import Dropdown from './Components/Dropdown';

function App() {
  return (
    <div className="App">
      <Dropdown  title={"what is rect js?"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae esse, libero eius cumque explicabo non repudiandae delectus repellat? Dolorem ea necessitatibus temporibus minus recusandae consectetur velit libero vel quam sit."}/>
      <Dropdown  title={"whay use react js?"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae esse, libero eius cumque explicabo non repudiandae delectus repellat? Dolorem ea necessitatibus temporibus minus recusandae consectetur velit libero vel quam sit."}/>
      <Dropdown  title={"how to install react in vs code?"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae esse, libero eius cumque explicabo non repudiandae delectus repellat? Dolorem ea necessitatibus temporibus minus recusandae consectetur velit libero vel quam sit."}/>
    
    </div>
  );
}

export default App;
