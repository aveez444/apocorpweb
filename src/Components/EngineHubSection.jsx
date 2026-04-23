import { useState } from "react";
import "../Styles/EngineHubSection.css";

const nodes = [
  { id: "sales", label: "Sales", angle: 90 },
  { id: "engineering", label: "Engineering", angle: 45 },
  { id: "manufacturing", label: "Manufacturing", angle: 0 },
  { id: "logistics", label: "Logistics", angle: 315 },
  { id: "accounts", label: "Accounts", angle: 270 },
  { id: "human-resource", label: "Human Resource", angle: 225 },
  { id: "purchase-order", label: "Purchase", angle: 180 },
  { id: "quality-control", label: "Quality Control", angle: 135 },
];

const RADIUS = 200; // distance from center

function EngineHubSection() {
  const [hoveredNode, setHoveredNode] = useState(null);

  const activeNode = nodes.find(n => n.id === hoveredNode);
  const glowAngle = activeNode ? activeNode.angle : 0;
  const glowOpacity = activeNode ? 1 : 0;

  return (
    <section className="engine-section">
      <div className="engine-shell">
        <div className="engine-diagram">

          {/* Directional Hover Glow Blob */}
          <div
            className="engine-directional-glow"
            style={{
              opacity: glowOpacity,
              transform: `rotate(${-glowAngle}deg) translateX(40px)`
            }}
          ></div>

          {/* SVG lines from center to each node */}
          <svg className="engine-svg" viewBox="0 0 540 540">
            {nodes.map((node) => {
              const rad = (node.angle * Math.PI) / 180;
              const cx = 270 + RADIUS * Math.cos(rad);
              const cy = 270 - RADIUS * Math.sin(rad);
              return (
                <line
                  key={node.id}
                  x1="270" y1="270"
                  x2={cx} y2={cy}
                  stroke="rgba(255, 255, 255, 0.35)" /* Updated to white for contrast on dark bg */
                  strokeWidth="1.5"
                  strokeDasharray="5 4"
                />
              );
            })}
          </svg>

          {/* Center node */}
          <div className="engine-center">
            <span className="engine-center-brand">ApoCorp</span>
            <span className="engine-center-label">Engine</span>
          </div>

          {/* Orbit nodes */}
          {nodes.map((node) => {
            const rad = (node.angle * Math.PI) / 180;
            const x = 50 + (RADIUS / 270) * 50 * Math.cos(rad);
            const y = 50 - (RADIUS / 270) * 50 * Math.sin(rad);
            const isHovered = hoveredNode === node.id;
            return (
              <div
                key={node.id}
                className={`engine-node ${isHovered ? "active" : ""}`}
                style={{ left: `${x}%`, top: `${y}%` }}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                {node.label}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default EngineHubSection;
