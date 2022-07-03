import React from "react";

function Puzzles() {
  return (
    <div className="flex justify-center items-center h-screen">
      <iframe
        src="https://bhannasa.github.io/tetris/"
        frameborder="0"
        height={700}
        width={1200}
        // style="overflow-auto"
      ></iframe>
    </div>
  );
}

export default Puzzles;
