import { ButtonStyle } from "./style";

export const Button = ({ title, handleFunction, primary, transparent }) => {
  return (
    <ButtonStyle
      primary={primary}
      transparent={transparent}
      onClick={handleFunction}
    >
      {title}
    </ButtonStyle>
  );
};
