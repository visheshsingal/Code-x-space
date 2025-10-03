import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const DigitalBoard = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const nodes: { x: number; y: number; dx: number; dy: number; radius: number }[] = [];
    const nodeCount = 40;

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 1.5,
        dy: (Math.random() - 0.5) * 1.5,
        radius: Math.random() * 3 + 1,
      });
    }

    const draw = () => {
      ctx.fillStyle = "rgba(0,0,0,0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      nodes.forEach((node, i) => {
        node.x += node.dx;
        node.y += node.dy;

        if (node.x < 0 || node.x > canvas.width) node.dx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.dy *= -1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#8B5CF6"; // purple glow
        ctx.fill();

        // Draw connecting lines
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dist = Math.hypot(node.x - other.x, node.y - other.y);
          if (dist < 120) {
            ctx.strokeStyle = `rgba(139,92,246,${1 - dist / 120})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(draw);
    };

    draw();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-full rounded-lg shadow-xl"
    />
  );
};

const CinematicAboutTech = () => {
  return (
    <section className="flex flex-col lg:flex-row lg:min-h-screen">
      {/* Left side text */}
      <div className="lg:w-1/2 bg-black text-white p-6 sm:p-12 lg:p-16 flex flex-col justify-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-purple-600 mb-4 sm:mb-6">
          About CodexSpace
        </h1>
        <p className="text-gray-300 text-base sm:text-lg">
          At CodexSpace, we merge creativity with technology to craft futuristic
          web solutions. Each project is meticulously designed to blend elegance,
          responsiveness, and security—delivering experiences users remember.
        </p>
        <p className="text-gray-400 mt-4">
          Our team thrives on innovation, precision, and pushing the boundaries
          of web design.
        </p>
      </div>

      {/* Right side animated board */}
      <div className="lg:w-1/2 w-full p-4 flex justify-center items-center bg-gray-900">
        <DigitalBoard />
      </div>
    </section>
  );
};

export default CinematicAboutTech;
