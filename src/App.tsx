import { useRecoilState, useRecoilValue } from "recoil";
import { hourSelector, minuteState } from "./atoms";

function App() {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const hours = useRecoilValue(hourSelector);
  const onMinuteChange = (event:React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
  };
  return (
    <>
      <input type="number" placeholder="Minutes" onChange={onMinuteChange} value={minutes}/>
      <input type="number" placeholder="Hours" value={hours}/>
    </>
  );
}

export default App;
