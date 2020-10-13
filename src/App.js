import React from 'react'

import './App.css'
import 'styles/fonts/Inter/Inter.css'
import 'styles/loader.css'
import 'aos/dist/aos.css';
import 'styles/fonts/material-icons/MaterialIcons.css'

import { Route } from 'react-router-dom'
import PeopleList from './components/List'
import CreatePerson from './components/Create'
import Layout from 'components/common/Layout'
import EditPerson from 'components/Edit';

const App = () => (
    <main>
        <Route exact path="/">
            <Layout><PeopleList /></Layout>
        </Route>
        <Route exact path="/add-person">
            <Layout><CreatePerson /></Layout>
        </Route>
        <Route exact path="/edit-person/:personId?">
            <Layout><EditPerson /></Layout>
        </Route>
    </main>
)

export default App;