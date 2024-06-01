import React, { useEffect, useState } from "react";
import Index from '../navigator/Index';
import SplashScreen from "../screen/SplashScreen";

export default function Loading() {

    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setisLoading(false);
        }, 3000);
    }, []);

    if(isLoading) {
        return (
            <SplashScreen />
        )
    }
    return (
        <Index />
    )
}