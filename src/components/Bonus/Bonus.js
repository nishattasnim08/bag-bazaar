import React from 'react';
import './Bonus.css'
const Bonus = () => {
    return (
        <div className='bonus-part'>
            <div>
                <h3>
                    How React Works?
                </h3>
                <p>
                    React reads these objects and uses them to build HTML elements on the virtual DOM before synchronizing with the real DOM. As a result, we'll have object trees on the virtual DOM and object trees on the real DOM. When we alter data on a React element, React immediately updates the accompanying DOM element.
                </p>
            </div>
            <div>
                <h3>Props VS State!</h3>
                <p><b>Props:</b><br />
                    A Component's configuration is represented via props (short for properties). They come from above and are unchangeable in the eyes of the Component that receives them. A Component can't change its own props, but it is in charge of putting the props of its child Components together. Props aren't limited to data; callback functions can also be used as props.<br></br>
                    <b>State:</b><br />
                    When a Component mounts, the state is a data structure that starts with a default value. It can change over time, usually as a result of user actions.
                    Internally, a Component manages its own state. It has no business messing with the state of its children, save from setting an initial state. You may think of state as something that is only available to that component.</p>
            </div>
        </div>
    );
};

export default Bonus;