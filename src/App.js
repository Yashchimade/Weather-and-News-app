import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import { TopHeadlines } from "./components/TopHeadlines";
import { AllNews } from "./components/AllNews";
import { Weather } from "./components/Weather";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path="/" element={<TopHeadlines/>}></Route>
        <Route path="/all-news" element={<AllNews/>}></Route>
        <Route path="/weather" element={<Weather/>}></Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
