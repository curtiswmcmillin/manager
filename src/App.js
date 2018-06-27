import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './Router';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyD0sXSYwTT2pAPbSI2PuEoPqC_IAFevZuA',
            authDomain: 'manager-8661b.firebaseapp.com',
            databaseURL: 'https://manager-8661b.firebaseio.com',
            projectId: 'manager-8661b',
            storageBucket: '',
            messagingSenderId: '277265451125'
        };
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
