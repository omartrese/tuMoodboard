import { useState } from "react";

export default function useBoard() {
    const [board, setBoard] = useState({ images: [], size: 3 });

    return {
        board,
        setBoard,
    };
}