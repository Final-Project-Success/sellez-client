import {createBrowserRouter} from "react-router-dom"
import ChatPage from "../pages/Chat-Web/ChatPage"
import HomePage from "../pages/HomePage/HomePage"

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "/chat",
        element: <ChatPage/>
    }
])

export default router