import React from 'react'
import PropTypes from 'prop-types'
import countries from './countries.json'

const CountrySelect = props => {
  const {option, ...rest} = props
  return <select {...rest}>{countries.map(country => option(country))}</select>
}

CountrySelect.propTypes = {
  /** render prop for <option>. Called with: {cca2, flag, name, code} */
  option: PropTypes.func,
}

CountrySelect.defaultProps = {
  option: ({cca2, flag, name}) => (
    <option value={cca2} key={cca2}>
      {`${flag} ${name}`}
    </option>
  ),
}

export default CountrySelect
