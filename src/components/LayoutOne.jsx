import useScreenSize from "../hooks/useScreenSize";

export default function LayoutOne() {
    const onSmallScreen = useScreenSize(768);

    return (
        <div>
            <h1>You are on {onSmallScreen ? "Small" : "Large"} Device</h1>
        </div>
    );
}
