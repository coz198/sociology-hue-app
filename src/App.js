import React from 'react';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {compose, applyMiddleware, createStore} from 'redux';
import rootReducer from './Reducers/index';
import {Main} from './Navigation/appRouter';
import {Root} from 'native-base';

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Root>
                    <Main/>
                </Root>
            </Provider>
        );
    }
}


export default App;