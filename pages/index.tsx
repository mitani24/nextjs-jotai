import { useAtom } from "jotai";
import { textAtom, textLenAtom, uppercaseAtom } from "../store";

const Input = () => {
  const [text, setText] = useAtom(textAtom);
  return <input value={text} onChange={(e) => setText(e.target.value)} />;
};

const CharCount = () => {
  const [len] = useAtom(textLenAtom);
  return <div>Length: {len}</div>;
};

const Uppercase = () => {
  const [uppercase] = useAtom(uppercaseAtom);
  return <div>Uppercase: {uppercase}</div>;
};

export default function Home() {
  return (
    <div>
      <Input />
      <CharCount />
      <Uppercase />
    </div>
  );
}
