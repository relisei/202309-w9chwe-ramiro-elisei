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
    <button
      type={type}
      onClick={actionOnclick}
      children={text}
      className={className}
    ></button>
  );
};

export default Button;
