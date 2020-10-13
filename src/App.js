import React from 'react'

import './App.css'
import 'styles/fonts/Inter/Inter.css'
import 'aos/dist/aos.css';

import { Route } from 'react-router-dom'
import PeopleList from './components/List'
import CreatePeople from './components/Create'
import Layout from 'components/common/Layout'

const App = () => (
    <main>
        <Route exact path="/">
            <Layout><PeopleList /></Layout>
        </Route>
        <Route exact path="/add-person">
            <Layout><CreatePeople /></Layout>
        </Route>
    </main>
)

export default App;