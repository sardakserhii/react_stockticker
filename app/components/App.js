import '../styles/application.scss';
import {connect} from '../services';
import React from 'react';
// import {addValue} from '../actions';
// import {useDispatch} from 'react-redux';

// The below line is here as an example of getting prices
connect('AAPL');

// class App extends PureComponent {
//     render() {
//         return (
//             <div className="stock-ticker">
//                 <h1>Stock Blotter</h1>
//             </div>
//         );
//     }
// }

const App = () => {
    // const dispatch = useDispatch();
    // const handleClick = () => {
    //     dispatch(addValue('hello'));
    // };

    return (<div className="stock-ticker">
        <div>Button</div>
    </div>);
};

export default App;
