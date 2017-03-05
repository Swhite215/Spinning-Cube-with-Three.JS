var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);

camera.position.set(0,0, 100);
camera.lookAt(new THREE.Vector3(0,0,0));

var scene = new THREE.Scene();

var material = new THREE.LineBasicMaterial({ color: 0x0000ff });

var geometry = new THREE.Geometry();

geometry.vertices.push(new THREE.Vector3(-20, 0, 0));

geometry.vertices.push(new THREE.Vector3(0, 20, 0));

geometry.vertices.push(new THREE.Vector3(20, 0, 0));

var line = new THREE.Line(geometry, material);

scene.add(line);

function render() {
  requestAnimationFrame( render );
  // cube.rotation.x += 0.05;
  line.rotation.x += 0.08;
  line.rotation.y += 0.02;
  //Anything I want to render will go here...
  renderer.render( scene, camera );
}

render();
