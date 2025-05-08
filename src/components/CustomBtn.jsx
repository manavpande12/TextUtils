import React from "react";

export default function CustomBtn({ btnText, btnColor, onClick }) {
    return (
        <button
            className={` ${btnColor} rounded-[0.5rem] p-1.5 font-bold text-white text-xs cursor-pointer shadow-md hover:bg-slate-800 transition duration-300 `}
            onClick={onClick}>
            {btnText}
        </button>
    );
}