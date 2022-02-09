import React from 'react';
import { TextInput } from 'react-native';
import { useTailwind } from 'tailwind-rn';

const Input = props => {
  const tailwind = useTailwind();

  return (
    <TextInput
      style={tailwind(
        'border-b-2 border-b-neutral-400 py-2 px-0 text-base',
      )}
      {...props}
    />
  );
};

Input.propTypes = {};

Input.defaultProps = {};

export default Input;
