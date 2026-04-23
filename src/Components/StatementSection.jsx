import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "../Styles/StatementSection.css";

gsap.registerPlugin(ScrollTrigger);

const content = [
  { text: "Every function your", className: "statement-accent" },
  { text: "manufacturing operation runs", className: "statement-highlight" },
  { text: "from the first purchase order", className: "statement-accent" },
  { text: "to the", className: "statement-white" },
  { text: "final dispatch note", className: "statement-highlight" },
  { text: "designed to work together", className: "statement-accent" },
  { text: "from day one,", className: "statement-white" },
  { text: "not stitched", className: "statement-highlight" },
  { text: "together over time.", className: "statement-accent" }
];

function StatementSection() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Start all words invisible
    gsap.set(".gsap-word", { opacity: 0 });

    // Stagger them to opaque based on scroll
    gsap.to(".gsap-word", {
      opacity: 1,
      stagger: 0.15,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 90%",
        end: "center 30%",
        scrub: true,
      }
    });
  }, { scope: containerRef });

  return (
    <section className="statement-section" ref={containerRef}>
      <div className="statement-shell">
        <div className="statement-text-wrapper">
          {/* Base Layer: Inactive/Grey Text ensures flawless wrapping footprint */}
          <p className="statement-text statement-text-base" aria-hidden="true">
            {content.map((group, groupIndex) => (
              <span key={`base-${groupIndex}`}>
                <span className={group.className}>
                  {group.text}
                </span>
                {groupIndex < content.length - 1 ? " " : ""}
              </span>
            ))}
          </p>

          {/* Reveal Layer: Colored overlapping words */}
          <p className="statement-text statement-text-overlay">
            {content.map((group, groupIndex) => {
              const words = group.text.split(" ");
              return (
                <span key={`overlay-${groupIndex}`}>
                  <span className={group.className}>
                    {words.map((word, wordIndex) => (
                      <span key={wordIndex} className="gsap-word">
                        {word}{wordIndex < words.length - 1 ? " " : ""}
                      </span>
                    ))}
                  </span>
                  {groupIndex < content.length - 1 ? " " : ""}
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </section>
  );
}

export default StatementSection;
