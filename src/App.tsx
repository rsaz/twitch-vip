import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";
import HomeView from "./views/HomeView";
import MainLayout from "./layouts/MainLayout";
import NotFound from "./components/NotFound";
import StreamersView from "./views/StreamersView";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            <Route index element={<HomeView />} />)
            <Route path="/streamers" element={<StreamersView />} />)
            <Route path="*" element={<NotFound />} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
