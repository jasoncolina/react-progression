// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
    const buttonText = 'Click me';
    const placeholderText = 'Enter text here';
    const labelText = 'Enter name:';

    return (
        <div>
            <label className="label" htmlFor="name">{labelText}</label>
            <input id="name" placeholder={placeholderText} type="text"/>
            <button style={{ backgroundColor:'blue', color:'white', borderRadius:'5px', padding:'5px' }}>{buttonText}</button>
        </div>
    );
};

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

//<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css">