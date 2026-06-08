import "./App.css";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./components/Cube";

function App() {

  const cubeSize: number = 3;

  return(
    <div id="canvas-container">
      <Canvas camera={{ 
        position: [10, 10, 10], // [x, y, z] 좌표
        fov: 90              // 시야각 (기본값은 50~75 사이가 적당)
      }}>
        <color attach="background" args={["#959595"]} />

        <OrbitControls target={[cubeSize-1, cubeSize-1, cubeSize-1]} />
        <ambientLight intensity={1} />

        <Cube big={cubeSize} />
      </Canvas>
    </div>
  )
}

export default App;