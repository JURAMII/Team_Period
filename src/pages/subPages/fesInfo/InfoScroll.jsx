import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function InfoScroll(props) {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({top:500, left:0, behavior:'smooth'});
    }, [pathname]);

    return <>{props.children}</>;
}