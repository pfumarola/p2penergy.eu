<template>
  <div class="wrapper">
    <div class="controls">
      <button v-for="n in [1,2,3,4,5]" :key="n" @click="world.goTo(n)">{{ n }}</button>
      <button @click="world.logCamera()">Camera Log</button>
    </div>
    <div id="scene-container" ref="sceneContainer"></div>
  </div>
</template>

<script>
//import scene from './scene';
import { World } from "./World/World";
export default {
  name: "app",
  data() {
    return {
      world: null
    };
  },
  mounted() {
    this.main();
    //scene(this.$refs.sceneContainer);
  },
  methods: {
    main() {
      // Get a reference to the container element
      const container = this.$refs.sceneContainer;

      // 1. Create an instance of the World app
      this.world = new World(container);

      // 2. start the animation loop
      this.world.start();
    },
  },
};
</script>

<style>
.controls {
  position: absolute;
  bottom: 0;
  z-index: 2;
  width: 100%;
  height: 10vh;
  padding: 1em;
  background: black;
  color: white;
}
button {
  padding: 1em;
  margin: 1em;
  cursor: pointer;
}
</style>
