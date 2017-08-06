import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './shared/Header';
import HomePage from './home/HomePage';
import ProfilePage from './account/ProfilePage';

// Only when the specific path is used, it will render the specific page
// the exact prop in the HomePage is used to only activate it for / and not /a
// by not setting the prop exact, fuzzy matches can occur 
// like /account/profile/some/thing would work for the second route
export default function Base() {
  return (
    <Router>
      <div className="wrapper">
        <Header username="anonymous" />
        <section className="page-content">
          <Route exact path="/" component={HomePage} />
          <Route path="/account/profile/:id" component={ProfilePage} />
        </section>
      </div>
    </Router>
  );
}
