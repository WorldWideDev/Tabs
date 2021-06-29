import logo from './logo.svg';
import './App.css';
import TabList from './TabList';

function App() {
	let tabData = [
        { 
	    	label: "Brush Teeth",
	    	content: "time to brush teeth!"
	    },
        { 
	    	label: "Dishes",
	    	content: "Let us do all the DISHES!"
	    },
        { 
	    	label: "Third Tab",
	    	content: "Content for third Tab!"
	    }
    ];
	return (
		<div className="App">
			<TabList items={tabData} />
		</div>
);
}

export default App;
