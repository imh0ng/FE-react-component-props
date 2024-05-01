import Box from "../components/Box/Box";
import Circle from "../components/Circle/Circle";

const BoxAlign = () => {
  const circleColorArr = [
    "pink",
    "red",
    "black",
    "gray",
    "green",
    "blue",
    "orange",
  ];
  const circles = circleColorArr.map((color, index) => {
    return (
      <Circle key={index} circleColor={color} />
    );
  });
  
  return (
    <>
      <div className="boxArea">
        <Box boxColor="red" text="text1"/>
        <Box boxColor="blue" text="text2"/>
        <Box boxColor="green" text="text3"/>
        <Box boxColor="pink" text="text4"/>
      </div>
      <div
        className="circleArea"
        style={{
          display: "flex",
        }}
      >
        {circles}
      </div>
    </> 
  );
};

export default BoxAlign;
