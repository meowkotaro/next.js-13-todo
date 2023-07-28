import React from "react";
import HeaderLeft from "./components/left";
import HeaderRight from "./components/right";

const HeaderLayout: React.FC = () => {
    return (
        <header className="flex justify-between items-center w-full h-12 bg-gray-700">
            <HeaderLeft />
            <HeaderRight/>
        </header>
    )
}

export default HeaderLayout