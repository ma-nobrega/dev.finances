import React, { SelectHTMLAttributes, useCallback, useState } from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Select: React.FC<SelectProps> = ({ icon: Icon, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleSelectFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleSelectBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <Container isFocused={isFocused}>
      {Icon && <Icon size={20} />}
      <select onFocus={handleSelectFocus} onBlur={handleSelectBlur} {...rest} />
    </Container>
  );
};

export default Select;
