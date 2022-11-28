import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import EditTask from "./components/Tasks/EditTask/EditTask";
import Tasks from "./components/Tasks/Tasks";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalProvider>
          <Routes>
            <Route path="/" element={<Tasks />} />
            <Route path="/task/:_id" element={<EditTask />} />
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
