// DEPENDENCIES
import { Routes, Route } from "react-router-dom";

// PAGES
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";
import New from "./Pages/New";

// COMPONENTS
import Navbar from "./Components/Navbar";

function App() {
  return (
    <main className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Index />}/>
        <Route path="/products/:id" element={<Show />} />
        <Route path="/products/new" element={<New />} />
        <Route path="/products/:id/edit" element={<Edit />} />
      </Routes>
    </main>
  );
}

export default App;
