import { Canvas, useFrame  } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

const Box = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    // state: 캔버스의 모든 정보(camera, scene, clock 등)가 담겨 있음
    // delta: 이전 프레임과 현재 프레임 사이의 시간 차이 (부드러운 애니메이션에 필수!)
    //xrFrame: xrFrame은 브라우저의 WebXR Device API에서 제공하는 XRFrame 객체 그 자체입니다.
    
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      meshRef.current.rotation.x = time * 5;
      // meshRef.current.rotation.y = time * 99999;
      // meshRef.current.rotation.z = time * 99999;
    }
  });

  return (
    <mesh rotation={[0.5, 0, 0]} ref={meshRef}>
      {/* 3. geometry와 material도 태그로 간단히 표현합니다. */}
      <boxGeometry args={[2, 2, 2]} />
      <meshBasicMaterial color={0x00ff00} />
    </mesh>
  )
}

function App() {
  return(
    <div id="canvas-container">
      <Canvas>
        <Box />
      </Canvas>
    </div>
  )
}

export default App;