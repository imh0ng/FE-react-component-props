import "./Button.css";

const Button = (props) => {
  return <button
    className={`btn ${props.isOn ? 'on' : ''}`}
    onClick={props.onClick}
  >
    {props.btnName}
  </button>;
};

export default Button;
