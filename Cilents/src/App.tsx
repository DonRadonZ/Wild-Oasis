import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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
import DarkModeProvider from "./context/DarkModeContext";
import { Toaster } from "react-hot-toast";



const queryCilent = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    }
  }
});


export default function App() {
  return (
    <DarkModeProvider>
    <QueryClientProvider client={queryCilent}>
      <ReactQueryDevtools initialIsOpen={false} />
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
        <Toaster position="top-center" gutter={12} containerStyle={{ margin: "8px" }} toastOptions={{
          success: { duration: 3000 }, error: { duration: 5000 }, style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
        }}} />
      </QueryClientProvider>
      </DarkModeProvider>
  )
}
