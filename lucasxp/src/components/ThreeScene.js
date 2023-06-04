import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

function ThreeScene() {
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);

  useEffect(() => {
    // Criação da cena Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
    camera.position.z = 1;

    const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
    const material = new THREE.MeshNormalMaterial();

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    rendererRef.current = renderer;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setAnimationLoop(animation);
    sceneRef.current.appendChild(renderer.domElement);

    // Função de animação
    function animation(time) {
      mesh.rotation.x = time / 2000;
      mesh.rotation.y = time / 1000;

      renderer.render(scene, camera);
    }

    // Atualização do tamanho da janela
    function handleWindowResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }

    window.addEventListener('resize', handleWindowResize);

    // Limpeza da cena
    return () => {
      window.removeEventListener('resize', handleWindowResize);
      sceneRef.current.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={sceneRef} />;
}

export default ThreeScene;
