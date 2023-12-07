import { useEffect } from "react";

const useTitleHook = (count) => {
  useEffect(() => {
    if (count > 0) {
      document.title = `Chats (${count})`;
    } else {
      document.title = "chats";
    }
  }, [count]);
};

export default useTitleHook;
