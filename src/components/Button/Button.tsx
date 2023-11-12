import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  type: "button" | "submit";
  actionOnclick?: () => void;
  text: string;
  className: string;
}

const Button = ({
  className,
  text,
  type,
  actionOnclick,
}: ButtonProps): React.ReactElement => {
  return (
    <ButtonStyled
      type={type}
      onClick={actionOnclick}
      children={text}
      className={className}
    ></ButtonStyled>
  );
};

export default Button;
