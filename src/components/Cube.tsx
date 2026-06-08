const Cube = () => {

  const positions: number[][][] = [
    [[0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]],

    [[9, 10, 11],
    [12, 13, 14],
    [15, 16, 17]],

    [[18, 19, 20],
    [21, 22, 23],
    [24, 25, 26]],
  ];

  return (
    <>
      {positions.map((x, xIndex) => 
        x.map((y, yIndex) => 
          y.map((z, zIndex) => {
            console.log(z);
            const lightness = (z+1) / 0.27;
            return (
              <mesh key={`${xIndex}${yIndex}${zIndex}`} position={[xIndex * 2, yIndex * 2, zIndex * 2]}>
                <boxGeometry args={[2, 2, 2]} />
                {/* <meshStandardMaterial color="white" /> */}
                <meshStandardMaterial color={`hsl(0, 0%, ${lightness}%)`} />
              </mesh>
            )
          })
        )
      )}
    </>
  );
}

export default Cube;