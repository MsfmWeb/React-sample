import React from "react";
import Message from "./components/message";

const App = () => {
  // const contentstyle = {
  //   color:"blue",
  //   Fontsize:"18px"
  //   // React上の記法として、font-sizeをFontsizeにしている。
  // };
  const onClickCountup = () => {
    setNum(Num + 1);
  };
  const [Num, setNum] = useState(0);
  // 可変の状態
  // ⇒stateが変更されると再レンダリングされる
  // 動的に値が変化するときに用いる

  const onClickSwitchShowFlag = () => {
    setFaseShowFlag(!FaseShowFlag);
  };
  const [FaseShowFlag, setFaseShowFlag] = useState(true);
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      {/* <p　style={contentstyle}>お元気ですか</p> */}
      <Message color="pink">元気です</Message>
      <Message color="blue">元気です</Message>
      <button onClick={onClickCountup}>カウントアップ</button>
      <button>on/off</button>
      <p>{Num}</p>
    </>
  );
};

// このファイル以外でApp関数を利用できるよう指定
export default App;
