import React from "react";

function Title() {
    console.log(`rendering title`);

    return <h2>React Performance</h2>;
}

export default React.memo(Title);
