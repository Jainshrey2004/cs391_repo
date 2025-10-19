import {createBrowserRouter, RouterProvider} from "react-router";
import Root from "./components/Root.tsx";

function App() {

    const router = createBrowserRouter(
        [
            {path:"*",Component:Root}
        ]
    );
    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}

export default App