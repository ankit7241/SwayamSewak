import React from "react";

const Button = (props) => {
    return (
        <button onClick={props.onClick} className="z-20 cursor-pointer flex items-center justify-center py-10 px-15 bg-white/5 border-primaryWidth border-white/10 rounded-20 shadow-xl hover:bg-white/10 hover:scale-105 transition">
            {
                props.gradient
                    ? <p className={`font-primary font-${props.weight} text-[12.5px] leading-5 bg-primaryGradient inline-block text-transparent bg-clip-text`}>{props.children}</p>
                    : <p className={`font-primary font-${props.weight} text-[12.5px] leading-5 text-white`}>{props.children}</p>
            }
        </button>
    )

}

export default Button;