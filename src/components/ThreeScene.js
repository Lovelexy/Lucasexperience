import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

function ThreeScene() {
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);

  useEffect(() => {
    // Criação da cena Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
    camera.position.z = 2;

    // Primeiro cubo
    const geometry1 = new THREE.BoxGeometry(0.2, 0.2, 0.2);
    const material1 = new THREE.MeshNormalMaterial();
    const mesh1 = new THREE.Mesh(geometry1, material1);
    mesh1.position.set(0, 0, 1); // Posição do segundo cubo
    scene.add(mesh1);

    // Segundo cubo
    const geometry2 = new THREE.BoxGeometry(0.3, 0.3, 0.3);
    const material2 = new THREE.MeshNormalMaterial();
    const mesh2 = new THREE.Mesh(geometry2, material2);
    mesh2.position.set(1, 0, 0); // Posição do segundo cubo
    scene.add(mesh2);
    
    // Segundo cubo
    const geometry3 = new THREE.BoxGeometry(0.3, 0.3, 0.3);
    const material3 = new THREE.MeshNormalMaterial();
    const mesh3 = new THREE.Mesh(geometry2, material2);
    mesh3.position.set(0, 1, 0); // Posição do segundo cubo
    scene.add(mesh3);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    rendererRef.current = renderer;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setAnimationLoop(animation);
    sceneRef.current.appendChild(renderer.domElement);

    // Função de animação
    function animation(time) {
      

     
      
      mesh1.rotation.x += 0.01;
      mesh1.rotation.y += 0.01;
      mesh2.rotation.x -= 0.02;
      mesh2.rotation.y -= 0.02;
      mesh3.rotation.x -= 0.03;
      mesh3.rotation.y -= 0.03;
      

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
      if (sceneRef.current && sceneRef.current.contains(renderer.domElement)) {
        sceneRef.current.removeChild(renderer.domElement);
      }

      renderer.dispose();
    };
  }, []);

  return <div ref={sceneRef} />;
}

export default ThreeScene;
