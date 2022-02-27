import { StyledUtilityBtn } from '../UI/Button.styled';
import { Card } from '../UI/Card.styled';

// TODO modularize Controls

export const UtilityButton = ({ title, children }) => {
  return (
    <Card p="1rem">
      <StyledUtilityBtn title={title}>
        <span className="icon">{children[0]}</span>
        <span className="text">{children[1]}</span>
      </StyledUtilityBtn>
    </Card>
  );
};
