import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createPlane } from './components/plane.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';

import { createControls } from './systems/controls.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';

import { gsap } from "gsap";

// These variables are module-scoped: we cannot access them
// from outside the module
let camera;
let renderer;
let scene;
let loop;
let controls;

class World {
  constructor(container) {
    camera = createCamera();
    renderer = createRenderer();
    scene = createScene();
    loop = new Loop(camera, scene, renderer);
    controls = createControls(camera, renderer.domElement);
    
    container.append(renderer.domElement);

    this.plane = createPlane();
    this.light = createLights();
    
    
    scene.add(this.plane, this.light);
    
    this.cubes = [];
    
    for(let i = 0; i<5; i++) {
      this.cubes[i] = createCube();
      loop.updatables.push(this.cubes[i]);
      scene.add(this.cubes[i]);
    }

    const resizer = new Resizer(container, camera, renderer);
  }

  // 2. Render the scene
  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }
  
  stop() {
    loop.stop();
  }

  goTo(targetIndex) {
    this.resetView()
    gsap.to(camera.position, {
      x: this.cubes[targetIndex-1].position.x,
      y: this.cubes[targetIndex-1].position.y,
      z: this.cubes[targetIndex-1].position.z,
      duration: 3,
      delay: 2
    })
  }

  resetView() {
    gsap.to(camera.position, {
      x: 0,
      y: 100,
      z: 100,
      duration: 2
    })
  }

  logCamera() {
    console.log(camera.position, camera.rotation);
  }
}

export { World };