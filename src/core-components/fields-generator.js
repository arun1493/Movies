import React from "react";
import { Field } from "redux-form";

export const FieldsGenerator = ({ fields }) => {
  return fields.map(({ name, component, componentProps }) => (
    <div key={name} className={'form-field'}>
      <Field
        name={name}
        component={component}
        props={componentProps || {}}
      />
    </div>
  ));
};
