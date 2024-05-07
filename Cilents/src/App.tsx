import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./page/Dashboard";
import Bookings from "./page/Bookings";
import Cabins from "./page/Cabins";
import Users from "./page/Users";
import Settings from "./page/Settings";
import Account from "./page/Account";
import Login from "./page/Login";
import PageNotFound from "./page/PageNotFound";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout/AppLayout";


export default function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard"/>} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="bookings" element={<Bookings/>} />
            <Route path="cabins" element={<Cabins/>} />
            <Route path="users" element={<Users />} />
            <Route path="settings" element={<Settings />} />
            <Route path="account" element={<Account />} />
          </Route>
          
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      </>
  )
}
