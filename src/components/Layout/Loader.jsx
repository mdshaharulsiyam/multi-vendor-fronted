import React from "react";
import Lottie from "react-lottie";
import animationData from "../../Assests/animations/24151-ecommerce-animation.json";

const Loader = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    // return (
    //     <div className="w-full h-screen flex items-center justify-center">
    //         <Lottie options={defaultOptions} width={300} height={300} />
    //     </div>
    // );
    return (
        <div id="loader" className="w-full h-screen flex items-center justify-center flex-col">
            <Lottie options={defaultOptions} width={300} height={300} />
            <span class="loader"></span>
        </div>
    );
};

export default Loader;