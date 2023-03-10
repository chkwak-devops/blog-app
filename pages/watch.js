import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import commonStyles from "/src/component/css/Common.module.css";


export default function Watch() {

    const [time, setTime] = useState();

    const getTime = () => {
        const date = new Date();
        const filterTime = date.toLocaleTimeString().split(" ")[1];
        setTime(filterTime)
    }

    useEffect(() => {
        setInterval(getTime, 1000)
        return () => {
            setInterval(getTime, 1000)
        }
    }, []);


    return (
        <div className={commonStyles.body_layout}>

            <div style={{ color: "blue", border: 1, fontSize: 100, fontWeight: "bold", textAlign: "center", padding: "1000" }} >
                {time}
            </div>

        </div>
    );
}
