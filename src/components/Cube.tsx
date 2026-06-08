import { useState } from "react";
import CubeLet from "./CubeLet";

interface CubeProps {
  size: number;
}

const Cube = ({ size }: CubeProps) => {
  const [hoveredCoords, setHoveredCoords] = useState<{x: number, y: number, z: number} | null>(null);

  const cubes = [];
  let index = 0;
  for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
      for (let z = 0; z < size; z++) {
        const lightness = (index + 1) / (size ** 3 / 100);
        cubes.push({x, y, z, initialLightness: lightness });
        index++;
      }
    }
  }

  return (
    <>
      {cubes.map((pos) => {
        const id = `${pos.x}${pos.y}${pos.z}`;

        return (
          <CubeLet
            key={id}
            id={id}
            x={pos.x}
            y={pos.y}
            z={pos.z}
            lightness={pos.initialLightness}
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