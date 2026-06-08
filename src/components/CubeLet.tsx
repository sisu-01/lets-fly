import type { ThreeEvent } from "@react-three/fiber";

// CubeLet이 렌더링에 필요한 Props 정의
interface CubeLetProps {
  id: string;
  x: number;
  y: number;
  z: number;
  lightness: number;
  hoveredCoords: { x: number; y: number; z: number } | null;
  onHover: (x: number, y: number, z: number) => void;
  onHoverOut: () => void;
}

const CubeLet = ({ id, x, y, z, lightness, hoveredCoords, onHover, onHoverOut, }: CubeLetProps) => {
  const isSelected = hoveredCoords?.x === x && hoveredCoords?.y === y && hoveredCoords?.z === z;
  const isSameX = hoveredCoords?.x === x;
  const isSameY = hoveredCoords?.y === y;

  return (
    <mesh
      key={id}
      position={[x * 2, y * 2, z * 2]}
      onPointerOver={(e: ThreeEvent<PointerEvent>) => {
        e.stopPropagation(); // 뒤쪽 큐브로 이벤트 전파 차단
        onHover(x, y, z);
      }}
      onPointerOut={onHoverOut}
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
};

export default CubeLet;