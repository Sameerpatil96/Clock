import { useEffect, useState } from "react";

function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());
  function updateTimer() {
    let newTime = new Date();
    setCurrentTime(newTime);
  }

  useEffect(function () {
    console.log("Component Did Mount");
    const timerInterval = setInterval(updateTimer, 1000);

    return function () {
      console.log("Component Will Unmount");
      clearInterval(timerInterval, updateTimer);
    };
  });
  //component did mount
  return (
    <h1>
      {currentTime.getHours()}:{currentTime.getMinutes()}:
      {currentTime.getSeconds()}
    </h1>
  );
}
export default Clock;
