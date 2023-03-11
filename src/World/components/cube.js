import { BoxBufferGeometry, Mesh, MeshStandardMaterial, MathUtils } from 'three';


function createCube() {
  // create a geometry
  const geometry = new BoxBufferGeometry(2, 4, 2);
  
  // create a Standar material
  const material = new MeshStandardMaterial({color: 'blue'});
  
  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material);
  
  cube.position.set(randomIntFromInterval(-20,20),2,randomIntFromInterval(-20,20));
  //cube.rotation.set(-0.5, -0.1, 0.8);
  
  const radiansPerSecond = MathUtils.degToRad(30);

  // this method will be called once per frame
  cube.tick = (delta) => {
    // increase the cube's rotation each frame
    //cube.rotation.z += radiansPerSecond * delta;
    //cube.rotation.x += radiansPerSecond * delta;
    cube.rotation.y += radiansPerSecond * delta;
  };

  return cube;
}

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export { createCube };