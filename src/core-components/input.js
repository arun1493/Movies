import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const adaptFileEventToValue = delegate => e => {
  delegate(e.target.value);
};

class DropDown extends React.Component {
  state = {
    options: [
      <MenuItem key={"none"} value="">
        <em>None</em>
      </MenuItem>
    ]
  };

  async componentDidMount() {
    const { searchService } = this.props;
    if (searchService) {
      const options = await searchService();
      const dropdownOptions = options.map(option => {
        const { label, value } = option;
        return (
          <MenuItem key={label} value={value}>
            {label}
          </MenuItem>
        );
      });
      dropdownOptions.unshift(
        <MenuItem key={"none"} value="">
          <em>None</em>
        </MenuItem>
      );
      this.setState({ options: dropdownOptions });
    }
  }

  render() {
    const {
      label,
      input: { value, onBlur },
      meta: { touched, error }
    } = this.props;
    return (
      <>
        <TextField
        fullWidth
          id="outlined"
          select
          label={label}
          value={value}
          onChange={adaptFileEventToValue(onBlur)}
          helperText={touched && error}
          variant="outlined"
          error={touched && !!error}
        >
          {this.state.options}
        </TextField>
      </>
    );
  }
}
const input = {
  textInput: ({
    input: { name, onChange, onBlur, value },
    meta: { touched, error },
    label,
    type
  }) => {
    return (
      <TextField
      fullWidth
        variant="outlined"
        id={name}
        label={label}
        type={type}
        value={value}
        error={touched && !!error}
        helperText={touched && error}
        onChange={adaptFileEventToValue(onChange)}
        onBlur={adaptFileEventToValue(onBlur)}
      />
    );
  },
  dropDown: DropDown
};

export default input;
