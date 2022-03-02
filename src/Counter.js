import { useEffect, useState } from "react"

export default function Counter(props) {
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const [count, setCount] = useState(props.tonnes2020 + (+new Date() - 1577836800000) * props.tpms)
    useEffect(() => {
        const timer = setTimeout(() => {
            setCount(props.tonnes2020 + (+new Date() - 1577836800000) * props.tpms)
        }, 1) // changing to 10, there seems to be lag

        return () => {clearTimeout(timer)}
    })

    return (
        <div className="mainCounter">
            {/* multiply by 1.10231 to make it tons */}
            <p>{numberWithCommas(Math.round(count * 1.10231))}</p>
        </div>
    )
}
// TODO: make counter for sea level rise, ice melted, degrees change in planet