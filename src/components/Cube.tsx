import { useState } from "react";

interface CubeProps {
  big: number;
}

const Cube = ({ big }: CubeProps) => {
  const [hoveredCoords, setHoveredCoords] = useState<{x: number, y: number, z: number} | null>(null);

  const cubes = [];
  for (let x = 0; x < big; x++) {
    for (let y = 0; y < big; y++) {
      for (let z = 0; z < big; z++) {
        cubes.push({ x, y, z });
      }
    }
  }

  return (
    <>
      {cubes.map((pos, posIndex) => {
        const id = `${pos.x}${pos.y}${pos.z}`;
        // lightness 계산: 0~1 사이의 값을 얻기 위해 나눗셈 조정
        const lightness = (posIndex+1) / (big**3/100);

        const isSelected = hoveredCoords?.x === pos.x && hoveredCoords?.y === pos.y && hoveredCoords?.z === pos.z;
        const isSameX = hoveredCoords?.x === pos.x;
        const isSameY = hoveredCoords?.y === pos.y;

        return (
          <mesh
            key={id}
            position={[pos.x * 2, pos.y * 2, pos.z * 2]}
            onPointerOver={(e) => {
              e.stopPropagation();
              setHoveredCoords({ x: pos.x, y: pos.y, z: pos.z });
            }}
            onPointerOut={() => setHoveredCoords(null)}
          >
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial
              color={
                isSelected ? "yellow" 
                : isSameX ? "red" 
                : isSameY ? "blue" 
                : `hsl(0, 0%, ${lightness}%)`
              }
            />
          </mesh>
        );
      })}
    </>
  );
}

export default Cube;