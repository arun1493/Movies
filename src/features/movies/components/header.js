import React from "react";
import { movieTypes, apiDataNormalizer } from "../constants";
import restClient from '../../../rest-client';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

class Header extends React.Component {

    handleMenuSelection = async (e) => {
        const { dispatch } = this.props;
        console.log(e.target.getAttribute('value'));
        const movies = await restClient.get('https://api.themoviedb.org/3/discover/movie?api_key=3a94078fb34b772a31d9a1348035bed7&language=en-US&sort');
        if (movies) {
            const normalizedData = apiDataNormalizer(movies.results);
            console.log(normalizedData);
            dispatch({type: 'STORE_MOVIES', data: normalizedData});
        }
    };

  render() {
    return (
      <>
        <div>
          {Object.keys(movieTypes).map((movieType, index) => 
            <Button variant="contained" color="primary" onClick={this.handleMenuSelection} value={movieType} key={index}>{movieTypes[movieType]}</Button>
          )}
        </div>
      </>
    );
  }
}

export default connect()(Header);