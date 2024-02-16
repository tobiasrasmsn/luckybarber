import "./App.css";

import { Route, Routes } from "react-router-dom";
import RootLayout from "./_root/RootLayout";
import { About, Book, Home } from "./_root/pages";

function App() {
    return (
        <main className="flex h-screen">
            <Routes>
                <Route path="/" element={<RootLayout />}>
                    {/* Nested routes are defined as children in RootLayout */}
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="book" element={<Book />} />
                </Route>
            </Routes>
        </main>
    );
}

export default App;
