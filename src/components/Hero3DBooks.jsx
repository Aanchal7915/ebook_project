import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

// Procedural Canvas Texture Generator for Luxury Book Covers
const createBookCoverTexture = (title, author, subtitle, theme) => {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 1440;
  const ctx = canvas.getContext('2d');

  // Background Gradient
  const grad = ctx.createLinearGradient(0, 0, 1024, 1440);
  if (theme === 'purple') {
    grad.addColorStop(0, '#15092A');
    grad.addColorStop(0.5, '#090714');
    grad.addColorStop(1, '#230E3D');
  } else if (theme === 'cyan') {
    grad.addColorStop(0, '#041724');
    grad.addColorStop(0.5, '#060B12');
    grad.addColorStop(1, '#1A0C2E');
  } else {
    // Gold / Obsidian
    grad.addColorStop(0, '#1E1708');
    grad.addColorStop(0.5, '#0A0A0D');
    grad.addColorStop(1, '#22190B');
  }
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 1024, 1440);

  // Subtle starry dust / cosmic grain
  for (let i = 0; i < 180; i++) {
    const x = Math.random() * 1024;
    const y = Math.random() * 1440;
    const r = Math.random() * 1.8;
    ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.4})`;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  // Outer Luxury Border Frame
  ctx.strokeStyle = theme === 'gold' ? '#D4AF37' : theme === 'cyan' ? '#38BDF8' : '#A78BFA';
  ctx.lineWidth = 8;
  ctx.strokeRect(40, 40, 944, 1360);

  ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
  ctx.lineWidth = 2;
  ctx.strokeRect(55, 55, 914, 1330);

  // Corner Ornaments
  const drawCorner = (x, y) => {
    ctx.save();
    ctx.translate(x, y);
    ctx.strokeStyle = theme === 'gold' ? '#F59E0B' : '#C084FC';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(0, 0, 20, 0, Math.PI / 2);
    ctx.stroke();
    ctx.restore();
  };
  drawCorner(60, 60);
  drawCorner(964, 60);
  drawCorner(60, 1380);
  drawCorner(964, 1380);

  // Publisher seal top
  ctx.font = '600 24px "Cinzel", Georgia, serif';
  ctx.fillStyle = theme === 'gold' ? '#FCD34D' : '#DDD6FE';
  ctx.textAlign = 'center';
  ctx.letterSpacing = '8px';
  ctx.fillText('THE THIRD EYE EDITIONS', 512, 120);

  // Central Emblem (Third Eye / Sacred Geometry)
  const cx = 512;
  const cy = 600;

  // Concentric Circles
  for (let r = 70; r <= 220; r += 50) {
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.strokeStyle = theme === 'gold' ? 'rgba(212, 175, 55, 0.25)' : 'rgba(168, 85, 247, 0.25)';
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  // The Third Eye Almond Shape
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(cx - 150, cy);
  ctx.quadraticCurveTo(cx, cy - 110, cx + 150, cy);
  ctx.quadraticCurveTo(cx, cy + 110, cx - 150, cy);
  ctx.strokeStyle = theme === 'gold' ? '#F59E0B' : '#C084FC';
  ctx.lineWidth = 6;
  ctx.stroke();

  // Eye Iris and Pupil
  const irisGrad = ctx.createRadialGradient(cx, cy, 10, cx, cy, 65);
  irisGrad.addColorStop(0, '#FFFFFF');
  irisGrad.addColorStop(0.3, theme === 'gold' ? '#FCD34D' : '#A855F7');
  irisGrad.addColorStop(1, theme === 'gold' ? '#92400E' : '#3B0764');
  ctx.fillStyle = irisGrad;
  ctx.beginPath();
  ctx.arc(cx, cy, 65, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#08090D';
  ctx.beginPath();
  ctx.arc(cx, cy, 26, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#FFFFFF';
  ctx.beginPath();
  ctx.arc(cx - 8, cy - 8, 8, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  // Golden Sunburst Rays behind Eye
  for (let a = 0; a < Math.PI * 2; a += Math.PI / 8) {
    const x1 = cx + Math.cos(a) * 165;
    const y1 = cy + Math.sin(a) * 165;
    const x2 = cx + Math.cos(a) * 210;
    const y2 = cy + Math.sin(a) * 210;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = theme === 'gold' ? 'rgba(253, 224, 71, 0.5)' : 'rgba(216, 180, 254, 0.5)';
    ctx.lineWidth = 3;
    ctx.stroke();
  }

  // Book Title
  ctx.textAlign = 'center';
  ctx.font = '700 64px "Cinzel", Georgia, serif';
  ctx.fillStyle = '#FFFFFF';
  ctx.letterSpacing = '3px';

  // Support multi-line title
  const words = title.split(' ');
  if (words.length > 2) {
    ctx.fillText(words.slice(0, 2).join(' '), 512, 980);
    ctx.fillText(words.slice(2).join(' '), 512, 1060);
  } else {
    ctx.fillText(title, 512, 1020);
  }

  // Subtitle
  ctx.font = '400 24px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = theme === 'gold' ? '#FDE68A' : '#DDD6FE';
  ctx.letterSpacing = '2px';
  ctx.fillText(subtitle, 512, 1140);

  // Divider Line
  ctx.strokeStyle = theme === 'gold' ? '#D4AF37' : '#8B5CF6';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(350, 1200);
  ctx.lineTo(674, 1200);
  ctx.stroke();

  // Author Name
  ctx.font = '600 32px "Cinzel", Georgia, serif';
  ctx.fillStyle = '#FFFFFF';
  ctx.letterSpacing = '5px';
  ctx.fillText(author.toUpperCase(), 512, 1270);

  return new THREE.CanvasTexture(canvas);
};

// Procedural Spine Texture Generator
const createSpineTexture = (title, author, theme) => {
  const canvas = document.createElement('canvas');
  canvas.width = 160;
  canvas.height = 1440;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = theme === 'gold' ? '#181206' : theme === 'cyan' ? '#071118' : '#110822';
  ctx.fillRect(0, 0, 160, 1440);

  // Spine gold ribs
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
  ctx.lineWidth = 4;
  [120, 240, 1200, 1320].forEach(y => {
    ctx.beginPath();
    ctx.moveTo(10, y);
    ctx.lineTo(150, y);
    ctx.stroke();
  });

  // Vertical text
  ctx.save();
  ctx.translate(80, 720);
  ctx.rotate(-Math.PI / 2);
  ctx.textAlign = 'center';
  ctx.fillStyle = '#F8FAFC';
  ctx.font = '700 36px "Cinzel", Georgia, serif';
  ctx.letterSpacing = '6px';
  ctx.fillText(title.toUpperCase(), 0, -5);

  ctx.fillStyle = theme === 'gold' ? '#D4AF37' : '#A78BFA';
  ctx.font = '400 22px "Plus Jakarta Sans", sans-serif';
  ctx.fillText(author, 0, 35);
  ctx.restore();

  return new THREE.CanvasTexture(canvas);
};

// Paper Edge texture for realistic book pages
const createPagesTexture = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#EDE8DE';
  ctx.fillRect(0, 0, 128, 1024);

  // Thin page striping
  for (let i = 0; i < 1024; i += 3) {
    ctx.fillStyle = i % 6 === 0 ? '#CFC7B6' : '#DFD8CA';
    ctx.fillRect(0, i, 128, 1);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  return texture;
};

export default function Hero3DBooks({ onSelectBook }) {
  const mountRef = useRef(null);
  const [activeBookIndex, setActiveBookIndex] = useState(0);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Dimensions
    let width = container.clientWidth;
    let height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0.4, 7.8);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // Materials and Textures
    const pagesTexture = createPagesTexture();
    const pagesMaterial = new THREE.MeshStandardMaterial({
      map: pagesTexture,
      roughness: 0.85,
      metalness: 0.05,
    });

    const book1Cover = createBookCoverTexture('The Brahmanda Protocol', 'Dr. Aryaman Varma', 'Vedic Cosmometry Meets Quantum Physics', 'purple');
    const book1Spine = createSpineTexture('The Brahmanda Protocol', 'Dr. A. Varma', 'purple');

    const book2Cover = createBookCoverTexture('Cyber Varanasi 2099', 'Tara Sen-Gupta', 'Synaptic Ghats & Neural Moksha Matrix', 'cyan');
    const book2Spine = createSpineTexture('Cyber Varanasi', 'Tara Sen-Gupta', 'cyan');

    const book3Cover = createBookCoverTexture('Architecture of Awakening', 'Acharya V. Rao', 'Tantric Geometry & Non-Dual Mind', 'gold');
    const book3Spine = createSpineTexture('Awakening', 'Acharya Rao', 'gold');

    // Create 3D Book Factory
    const bookGeo = new THREE.BoxGeometry(2.35, 3.25, 0.45);

    const makeBook = (coverTex, spineTex, themeColor) => {
      const backCoverMat = new THREE.MeshStandardMaterial({
        color: themeColor === 'gold' ? 0x161208 : themeColor === 'cyan' ? 0x060E16 : 0x0E081A,
        roughness: 0.65,
        metalness: 0.15,
      });

      const frontCoverMat = new THREE.MeshStandardMaterial({
        map: coverTex,
        roughness: 0.35,
        metalness: 0.3,
      });

      const spineMat = new THREE.MeshStandardMaterial({
        map: spineTex,
        roughness: 0.4,
        metalness: 0.25,
      });

      // Box materials order: [right, left(spine), top, bottom, front, back]
      const materials = [
        pagesMaterial, // right page edge
        spineMat,      // left spine
        pagesMaterial, // top page edge
        pagesMaterial, // bottom page edge
        frontCoverMat, // front cover
        backCoverMat,  // back cover
      ];

      const mesh = new THREE.Mesh(bookGeo, materials);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      return mesh;
    };

    // Instantiate 3 floating books
    const bookGroup1 = new THREE.Group();
    const bookMesh1 = makeBook(book1Cover, book1Spine, 'purple');
    bookGroup1.add(bookMesh1);
    bookGroup1.position.set(-0.25, -0.15, 0.7);
    bookGroup1.rotation.set(-0.1, 0.32, -0.06);
    scene.add(bookGroup1);

    const bookGroup2 = new THREE.Group();
    const bookMesh2 = makeBook(book2Cover, book2Spine, 'cyan');
    bookGroup2.add(bookMesh2);
    bookGroup2.position.set(-2.45, 0.45, -0.9);
    bookGroup2.rotation.set(0.12, 0.55, -0.16);
    scene.add(bookGroup2);

    const bookGroup3 = new THREE.Group();
    const bookMesh3 = makeBook(book3Cover, book3Spine, 'gold');
    bookGroup3.add(bookMesh3);
    bookGroup3.position.set(2.2, -0.35, -0.5);
    bookGroup3.rotation.set(0.08, -0.42, 0.14);
    scene.add(bookGroup3);

    const books = [
      { group: bookGroup1, basePos: { x: -0.25, y: -0.15, z: 0.7 }, baseRot: { x: -0.1, y: 0.32, z: -0.06 }, speed: 1.1 },
      { group: bookGroup2, basePos: { x: -2.45, y: 0.45, z: -0.9 }, baseRot: { x: 0.12, y: 0.55, z: -0.16 }, speed: 0.9 },
      { group: bookGroup3, basePos: { x: 2.2, y: -0.35, z: -0.5 }, baseRot: { x: 0.08, y: -0.42, z: 0.14 }, speed: 1.25 }
    ];

    // Background Holographic Third Eye Ring
    const ringGeo = new THREE.TorusGeometry(3.6, 0.025, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x8B5CF6,
      transparent: true,
      opacity: 0.3,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.position.set(0, 0, -2.5);
    scene.add(ringMesh);

    const innerRingGeo = new THREE.TorusGeometry(2.2, 0.015, 16, 80);
    const innerRingMat = new THREE.MeshBasicMaterial({
      color: 0xD4AF37,
      transparent: true,
      opacity: 0.35,
    });
    const innerRing = new THREE.Mesh(innerRingGeo, innerRingMat);
    innerRing.position.set(0, 0, -2.4);
    scene.add(innerRing);

    // Particle Stars in background
    const particleGeo = new THREE.BufferGeometry();
    const particleCount = 220;
    const posArray = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 14;
      posArray[i + 1] = (Math.random() - 0.5) * 10;
      posArray[i + 2] = (Math.random() - 0.5) * 8 - 1;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.035,
      color: 0xC084FC,
      transparent: true,
      opacity: 0.65,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Dynamic Cinematic Lighting
    const ambientLight = new THREE.AmbientLight(0x13121F, 2.0);
    scene.add(ambientLight);

    const mainKeyLight = new THREE.DirectionalLight(0xFFFFFF, 3.2);
    mainKeyLight.position.set(4, 5, 6);
    mainKeyLight.castShadow = true;
    mainKeyLight.shadow.mapSize.width = 1024;
    mainKeyLight.shadow.mapSize.height = 1024;
    mainKeyLight.shadow.bias = -0.0005;
    scene.add(mainKeyLight);

    const violetLight = new THREE.PointLight(0x8B5CF6, 12, 14);
    violetLight.position.set(-3.5, 2, 2.5);
    scene.add(violetLight);

    const goldLight = new THREE.PointLight(0xD4AF37, 10, 14);
    goldLight.position.set(3.5, -2, 2);
    scene.add(goldLight);

    // Mouse Tracking for Parallax
    let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouse.targetX = x;
      mouse.targetY = y;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let clock = new THREE.Clock();
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerping
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Rotate background rings slowly
      ringMesh.rotation.z = elapsedTime * 0.08;
      innerRing.rotation.z = -elapsedTime * 0.12;
      particles.rotation.y = elapsedTime * 0.02;

      // Animate books with subtle floating and mouse tilt
      books.forEach((b, index) => {
        const floatOffset = Math.sin(elapsedTime * b.speed + index * 1.6) * 0.14;
        const tiltOffset = Math.cos(elapsedTime * (b.speed * 0.8) + index) * 0.04;

        b.group.position.y = b.basePos.y + floatOffset + mouse.y * 0.25;
        b.group.position.x = b.basePos.x + mouse.x * 0.35;

        b.group.rotation.y = b.baseRot.y + tiltOffset + mouse.x * 0.28;
        b.group.rotation.x = b.baseRot.x + mouse.y * 0.18;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      bookGeo.dispose();
      ringGeo.dispose();
      innerRingGeo.dispose();
      particleGeo.dispose();
      pagesTexture.dispose();
      book1Cover.dispose();
      book1Spine.dispose();
      book2Cover.dispose();
      book2Spine.dispose();
      book3Cover.dispose();
      book3Spine.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[540px] lg:h-[650px] flex items-center justify-center select-none">
      {/* 3D WebGL Canvas Mount */}
      <div 
        ref={mountRef} 
        className="w-full h-full cursor-grab active:cursor-grabbing relative z-10" 
      />

      {/* Atmospheric Glow Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-purple-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[280px] h-[280px] bg-amber-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Interactive Floating Badge Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 px-4 py-2 rounded-full glass-panel border border-purple-500/30 text-xs text-slate-300 shadow-xl backdrop-blur-md">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span className="font-outfit text-slate-200">Interactive 3D Stage</span>
        <span className="text-slate-500">|</span>
        <span className="text-purple-300">Move mouse to tilt & inspect</span>
      </div>
    </div>
  );
}
