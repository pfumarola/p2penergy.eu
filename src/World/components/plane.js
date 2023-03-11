import { PlaneBufferGeometry, MeshStandardMaterial, Mesh, DoubleSide } from 'three';

function createPlane() {

  const geometry = new PlaneBufferGeometry(50, 50, 8, 8);
  const material = new MeshStandardMaterial({ color: 'white', side: DoubleSide})

  const plane = new Mesh(geometry, material);

  plane.rotateX( - Math.PI / 2);

  return plane;
}

export { createPlane };