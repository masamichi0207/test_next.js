import Button from "react-bootstrap/Button";
import React, { useRef, Component, useState } from "react";
interface Send {
  // talk_list: object;
  user?: string;
  text?: string;
  button_send: (text: string, user: string) => void;
}
const Send = (props: Send) => {
  const [mesText, setMesText] = useState<string>("");
  const [user, setUser] = useState<string>("andy");
  //親コンポーネントからもらった関数にユーザーと入力値を入れて返す。
  //   props.user(User);
  //   props.text(mesText);
  return (
    <>
      <select
        name="sample"
        value={user}
        onChange={(event) => setUser(event.target.value)}
      >
        <option value="sam">サム</option>
        <option value="andy">アンディ</option>
      </select>
      <input
        value={mesText}
        type="text"
        placeholder="メッセージを入力してください"
        style={{ width: "89%" }}
        onChange={(event) => setMesText(event.target.value)}
      />
      <Button
        variant="primary"
        onClick={() => props.button_send(mesText, user)}
      >
        送信
      </Button>
    </>
  );
};

export default Send;
