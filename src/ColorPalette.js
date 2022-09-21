import {ColorPicker, useColor} from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import "./styleCP.css";

export const CPApp = () => {
    const [color, setColor] = useColor("hex", "#121212");

    console.log(color);

    return [<div
        style={{
            backgroundColor: color.hex.toString(),
            width: '300px',
            height: '300px',
            float: "right"
        }}
    />,<ColorPicker width={500} height={400} color={color} onChange={setColor} dark/>];
};