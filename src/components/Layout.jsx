import { useState } from "react";
import { useEffect } from "react";
import { ScrollProvider } from "../context/ScrollContext";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
    const [scrollTopData, setScrollTopData] = useState(0);
    const handleScroll = (event) => {
        setScrollTopData(event.target.scrollingElement.scrollTop)
    }
    useEffect(() => {

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    })
    return (
        <>
            <div className="h-full" onScroll={handleScroll}>
                <ScrollProvider value={{ scrollTopData: scrollTopData }}>
                    <div className="w-full h-full">
                        {children}
                    </div>
                    <Footer />
                </ScrollProvider>
            </div>
        </>
    )
}

export default Layout;