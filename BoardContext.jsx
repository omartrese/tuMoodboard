import { createContext, useContext, useState } from "react";

const BoardContext = createContext();

export function BoardProvider({ children }) {
  const [board, setBoard] = useState({ images: [], size: 6 });
  return (
    <BoardContext.Provider value={{ board, setBoard }}>
      {children}
    </BoardContext.Provider>
  );
}

export function useBoard() {
  return useContext(BoardContext);
}
