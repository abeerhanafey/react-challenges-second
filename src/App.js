import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Posts from './Posts';
import "./main";
function App() {
  return (
    <div className="App w-full bg-lime-100">
      <Header />
      <Posts />
      <Footer />
    </div>
  );
}

export default App;
