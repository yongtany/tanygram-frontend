import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.input`
  border: 0;
  border: ${props => props.theme.boxBorder};
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.bgColor};
  height: 35px;
  font-size: 12px;
  padding: 0 15px;
`;

const Input = ({placeholder}) => <Container placeholder={placeholder}/>;

Input.propTypes = {
  placeholder: PropTypes.string.isRequired
}
export default Input;
