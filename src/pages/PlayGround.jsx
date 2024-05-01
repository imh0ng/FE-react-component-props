import { useRef, useState } from 'react';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';

const PlayGround = () => {
  const inputRef = useRef(null);
  const [isError, setIsError] = useState(false);

  const handleSubmit = () => {
    if (!inputRef.current.value) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };
  return (
    <div className="playground">
      <Input ref={inputRef} label="USER ID" supportingText="아이디를 입력해주세요." isError={isError} placeholder="입력해주세요." />
      <Button onClick={handleSubmit} btnName="Submit"/>
    </div>
  );
};

export default PlayGround;
