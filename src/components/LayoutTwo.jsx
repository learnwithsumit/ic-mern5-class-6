import useScreenSize from "../hooks/useScreenSize";

export default function LayoutOne() {
    const onSmallScreen = useScreenSize(868);

    return (
        <div className={onSmallScreen ? "small" : "large"}>
            <h1>Layout 2</h1>
        </div>
    );
}
