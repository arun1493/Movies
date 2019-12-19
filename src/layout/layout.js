import React from "react";
import "./layout.scss";
import Header from "../features/movies/components/header";
import MovieList from '../features/movies/components/movie-list';
import FilterForm from '../features/movies/components/filter-form';

const Layout = props => {
  return (
    <div className="wrapper">
      <div className="main-head">
        <Header />
      </div>
      <div className="content">
        <MovieList/>
      </div>
      <aside className="side"><FilterForm/></aside>
    </div>
  );
};

export default Layout;
