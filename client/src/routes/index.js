import {createBrowserRouter} from "react-router-dom"
import ChatPage from "../pages/Chat-Web/ChatPage"
import HomePage from "../pages/HomePage/HomePage"
import LoginPage from "../pages/LoginPage/LoginPage"

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "/chat",
        element: <ChatPage/>
    },
    {
        path: "/login",
        element: <LoginPage/>
    }
])

export default router