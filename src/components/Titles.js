import React from 'react';

//can also write the above component like below if we are not managing any states
// another way of rendering using arrow function without props(as we were not using props) 
const Titles = () => (
    <div>
        <h1 className="title-container__title">Weather Finder</h1>
        <p className="title-container__subtitle">Find temperature,conditions and more..</p>
    </div>
);

export default Titles;