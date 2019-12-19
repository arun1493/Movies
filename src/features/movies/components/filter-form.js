import React from "react";
import { FieldsGenerator } from "../../../core-components/fields-generator";
import { reduxForm } from "redux-form";
import { filterForm, fields, apiDataNormalizer } from "../constants";
import restClient from '../../../rest-client';

class FilterForm extends React.Component {


  render() {
    return (
      <div>
        <form>
          <FieldsGenerator fields={fields} />
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: filterForm, onChange: async (values, dispatch, props, previousValues) => {
console.log(values);
if (previousValues.mediaType !== values.mediaType || previousValues.genre !== values.genre) {
    const movies = await restClient.get('https://api.themoviedb.org/3/discover/movie?api_key=3a94078fb34b772a31d9a1348035bed7&language=en-US&sort');
    if (movies) {
        const normalizedData = apiDataNormalizer(movies.results);
        dispatch({type: 'STORE_MOVIES', data: normalizedData});
    }
}
} })(FilterForm);

