import React from 'react';
import RegisterForm from './RegisterForm';

import './assets/scss/App.scss';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';

export default function() {
    return (
        <div className={'App'}>
          <RegisterForm />
          <SearchBar />
          <Emaillist />
        </div>
    )
}