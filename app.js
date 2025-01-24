import * as THREE from './js/three.module.js'; // Oder korrekter Import
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'; // Für moderne Three.js-Versionen

// Szene
const scene = new THREE.Scene();

// Kamera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 2, 10);

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Licht
const ambientLight = new THREE.AmbientLight(0x404040, 1.5);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1, 50);
pointLight.position.set(0, 5, 0);
scene.add(pointLight);

// GLTF Loader
const loader = new GLTFLoader();

// Lade `.glb`-Modell
loader.load(
    './models/model.glb', // Pfad zur .glb-Datei
    (gltf) => {
        const room = gltf.scene;
        room.scale.set(5, 5, 5); // Größe anpassen
        scene.add(room);
        console.log('Room model loaded successfully!');
    },
    undefined, // Fortschrittsfunktion (optional)
    (error) => {
        console.error('An error occurred while loading the .glb file:', error);
    }
);

// Animation
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
