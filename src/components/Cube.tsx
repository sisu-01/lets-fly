import { useState } from "react";
import CubeLet from "./CubeLet";

interface CubeProps {
  size: number;
}

const Cube = ({ size }: CubeProps) => {
  const [hoveredCoords, setHoveredCoords] = useState<{x: number, y: number, z: number} | null>(null);

  const cubes = [];
  for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
      for (let z = 0; z < size; z++) {
        cubes.push({ x, y, z });
      }
    }
  }

  return (
    <>
      {cubes.map((pos, posIndex) => {
        const id = `${pos.x}${pos.y}${pos.z}`;
        // lightness 계산: 0~1 사이의 값을 얻기 위해 나눗셈 조정
        const lightness = (posIndex+1) / (size**3/100);

        return (
          <CubeLet
            key={id}
            id={id}
            x={pos.x}
            y={pos.y}
            z={pos.z}
            lightness={lightness}
            hoveredCoords={hoveredCoords}
            onHover={(hx, hy, hz) => setHoveredCoords({ x: hx, y: hy, z: hz })}
            onHoverOut={() => setHoveredCoords(null)}
          />
        );
      })}
    </>
  );
}

export default Cube;