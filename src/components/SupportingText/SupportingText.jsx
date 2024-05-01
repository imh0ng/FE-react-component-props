const SupportingText = ({children, isError}) => {
  return <div style={{ color: isError ? 'red' : 'black' }}>{children}</div>;
};

export default SupportingText;
