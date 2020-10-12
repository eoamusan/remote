import React from 'react';

import './App.css';
import 'styles/fonts/Inter/Inter.css'

import { Route } from 'react-router-dom'
import PeopleList from './components/List'
import CreatePeople from './components/Create'
import Layout from 'components/common/Layout'

const App = () => (
    <main>
        <Route exact path="/">
            <Layout><PeopleList /></Layout>
        </Route>
        <Route exact path="/create" component={CreatePeople} />
    </main>
)

export default App;