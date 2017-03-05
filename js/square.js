var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//Camera Attributes (field of view, width/height aspect ratio, near clipping plane closer not rendered, far clipping plane farther not rendered)

var renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight);
//Set size we want to render app, use the width and height of the area we want to fill. For intensive apps you can set smaller values.

document.body.appendChild(renderer.domElement);
//Add the renderer elemnt to our html document, this is canvas element the renderer uses to display the scene to us.

var geometry = new THREE.BoxGeometry( 1, 1, 1);
//Box Geometry contains all the point vertices and fill faces of the cube.

var material = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true} );
//All materials take an object of properties which will be applied to them.

var cube = new THREE.Mesh( geometry, material);
//A mesh is an object that takes geometry and applies a material to it. We can then insert this to our scene and move it freely around.

scene.add( cube );
//By default when we cal scene.add the thing we add will be added to the coordinates (0,0,0). To avoid camera and cube being inside each other, we move camera out a bit by changing the z index.

camera.position.z = 5;

//To render something we need a render loop.
function render() {
  requestAnimationFrame( render );
  // cube.rotation.x += 0.05;
  cube.rotation.y += 0.01;
  cube.rotation.x += 0.01;
  //Anything I want to render will go here...
  renderer.render( scene, camera );
}

render();
//This will create a loop that causes the rendered to draw the scene 60 times per second.
