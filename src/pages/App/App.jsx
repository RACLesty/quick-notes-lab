import { useState } from "react";
// Add the following import
import { Routes, Route } from "react-router-dom";
import { getUser } from '../../utilities/users-service';
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import NavBard from "../../components/NavBar/NavBar";

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      {user ? (
        <>
        <NavBard user={ user } setUser={ setUser }/>
        <Routes>
          <Route path="/orders/new" element={<NewOrderPage />} />
          <Route path="/orders" element={<OrderHistoryPage />} />
        </Routes>
        
        </>
      ) : (
        <AuthPage setUser={ setUser }/>
      )}
    </main>
  );
}
