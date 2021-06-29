import React, { useState } from 'react';
import "./TabList.css";

// takes "array of items" as props
function TabList(props) {
    // { label: "firstOne": content: "text for first one" }
    // 0
    const [ selectedTab, setSelectedTab ] = useState(props.items[0]);
    return (
        <div>
        { props.items.map((tab, i) => (
            <button
                className={ tab === selectedTab ? "selected": "unselected" } 
                key={i} 
                onClick={ () => setSelectedTab(props.items[i]) }>{ tab.label }</button>
        ))}
            <div>
                { selectedTab.content }
            </div>
        </div>

    )
}
export default TabList;