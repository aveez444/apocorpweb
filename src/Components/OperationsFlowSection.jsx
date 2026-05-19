import { useEffect, useState } from "react";
import "../Styles/OperationsFlowSection.css";

import img3 from "../assets/carousel-3.png";
import img4 from "../assets/carousel-4.png";
import img5 from "../assets/carousel-5.png";
import azureLogo from "../assets/ms-azure-logo.png";

import salesImg1 from "../assets/operations-flow-sales-and-marketing-1.png";
import salesImg2 from "../assets/operations-flow-sales-and-marketing-2.png";
import salesImg3 from "../assets/operations-flow-sales-and-marketing-3.png";

import logisticsImg1 from "../assets/operations-flow-logistics-and-dispatch-1.png";
import logisticsImg2 from "../assets/operations-flow-logistics-and-dispatch-2.png";

const modules = [
  {
    id: "sales",
    title: "Sales and Marketing",
    image: [salesImg1, salesImg2, salesImg3],
  },
  {
    id: "logistics",
    title: "Logistics and Dispatch",
    image: [logisticsImg2, logisticsImg1],
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    image: img3,
  },
  {
    id: "quality",
    title: "Quality Control",
    image: img4,
  },
  {
    id: "inventory",
    title: "Inventory",
    image: img5,
  },
];

function OperationsFlowSection() {
  const [activeModule, setActiveModule] = useState(modules[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveModule((current) => {
        const currentIndex = modules.findIndex(
          (module) => module.id === current.id
        );
        const nextIndex = (currentIndex + 1) % modules.length;
        return modules[nextIndex];
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="operations-flow-section">
      <div className="operations-shell">
        <h2 className="operations-heading">
          Every team connected. Every process unified.
        </h2>

        <div className="operations-layout">
          <div className="operations-diagram">
            <div className="operations-grid-bg"></div>

            <div className="azure-box">
              <img src={azureLogo} alt="Microsoft Azure" className="azure-box-image" />
            </div>

            <div className="secure-safe-note">
              <span className="secure-safe-text">Secure and Safe!</span>
              <svg
                className="secure-safe-curve"
                viewBox="0 0 120 80"
                aria-hidden="true"
              >
                <path
                  d="M 0 50 Q 70 24 45 8"
                  fill="none"
                  stroke="#0b3f73"
                  strokeWidth="2.2"
                  strokeDasharray="5 5"
                  strokeLinecap="round"
                />
                <path
                  d="M 40 13 L 40 -10 L 58 8"
                  fill="#0b3f73"
                  stroke="#0b3f73"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="azure-link azure-link-left">
              <span className="azure-line"></span>
              <span className="azure-head azure-head-up"></span>
            </div>

            <div className="azure-link azure-link-right">
              <span className="azure-line"></span>
              <span className="azure-head azure-head-down"></span>
            </div>

            <div className="apocorp-box">
              <span>ApoCorp</span>
            </div>

            <div className="main-trunk"></div>

            <div className="module-list">
              {modules.map((module, index) => (
                <button
                  key={module.id}
                  className={`module-node ${activeModule.id === module.id ? "active" : ""
                    }`}
                  onClick={() => setActiveModule(module)}
                  style={{ "--i": index }}
                >
                  <span className="module-branch"></span>
                  <span className="module-label">
                    <span className="module-label-text">{module.title}</span>
                  </span>
                  {activeModule.id === module.id && (
                    <span className="signal-dot"></span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div
            className={`operations-preview-card ${Array.isArray(activeModule.image) ? "operations-preview-scroll" : ""
              }`}
          >
            {Array.isArray(activeModule.image) ? (
              activeModule.image.map((img, idx) => (
                <img key={idx} src={img} alt={`${activeModule.title} details ${idx + 1}`} />
              ))
            ) : (
              <img src={activeModule.image} alt={activeModule.title} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OperationsFlowSection;