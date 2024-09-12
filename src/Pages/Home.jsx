import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import "../App.css"; 

const Home = () => {
    const containerRef = useRef(null);
    const [showPosters, setShowPosters] = useState(false);
  
    useEffect(() => {
      // Three.js initialization
      let scene, camera, renderer;
      let particleSystem;
      let particles = [];
  
      const init = () => {
        scene = new THREE.Scene();
  
        camera = new THREE.PerspectiveCamera(
          75,
          window.innerWidth / window.innerHeight,
          1,
          1000
        );
        camera.position.z = 100;
  
        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        containerRef.current.appendChild(renderer.domElement);
  
        // Create colorful particles
        let particleCount = 1000;
        let particleMaterial = new THREE.PointsMaterial({
          color: 0xffffff,
          size: 1,
        });
  
        let particleGeometry = new THREE.BufferGeometry();
        let positions = [];
        let colors = [];
  
        for (let i = 0; i < particleCount; i++) {
          let x = Math.random() * 200 - 100;
          let y = Math.random() * 200 - 100;
          let z = Math.random() * 200 - 100;
  
          positions.push(x, y, z);
  
          let r = Math.random();
          let g = Math.random();
          let b = Math.random();
          let color = new THREE.Color(r, g, b);
          colors.push(color.r, color.g, color.b);
        }
  
        particleGeometry.setAttribute(
          "position",
          new THREE.Float32BufferAttribute(positions, 3)
        );
        particleGeometry.setAttribute(
          "color",
          new THREE.Float32BufferAttribute(colors, 3)
        );
  
        particleSystem = new THREE.Points(particleGeometry, particleMaterial);
        scene.add(particleSystem);
  
        animate();
      };
  
      const animate = () => {
        requestAnimationFrame(animate);
  
        // Rotate particles
        let time = Date.now() * 0.00005;
        if (scene.children[0]) {
          scene.children[0].rotation.y = time * 0.2;
  
          // Move particles
          let positions = scene.children[0].geometry.attributes.position.array;
          for (let i = 0; i < positions.length; i += 3) {
            positions[i] += Math.sin(time + i * 0.01) * 0.1;
            positions[i + 1] += Math.cos(time + i * 0.01) * 0.1;
            positions[i + 2] += Math.sin(time + i * 0.01) * 0.1;
          }
          scene.children[0].geometry.attributes.position.needsUpdate = true;
        }
  
        renderer.render(scene, camera);
      };
  
      init();
  
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
        if (containerRef.current) {
          containerRef.current.removeChild(renderer.domElement);
        }
      };
    }, []);
  
    const togglePosters = () => {
      setShowPosters(!showPosters);
    };
  
  return (
    <div>
    <div id="container" ref={containerRef}></div>
    <div id="overlay">
    <p
          style={{
            fontSize: "50px",
            fontWeight: "800",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          Welcome to 
          Ventech Solution 
        </p>
    </div>

    {showPosters && (
      <div className="poster-container" onClick={togglePosters}>
        <div className="poster-slide">
          <img
            className="poster-img"
            src="https://i.pinimg.com/474x/51/24/d1/5124d1d3cd2d6513448fe45e65aca8d3.jpg"
            alt="Movie Poster"
          />
          <div className="poster-details">
            <p>Movie Name 1</p>
            <p>IMDb Rating: 8.5</p>
          </div>
        </div>
        {/* Repeat for other poster slides */}
      </div>
    )}
  </div>
  )
}

export default Home