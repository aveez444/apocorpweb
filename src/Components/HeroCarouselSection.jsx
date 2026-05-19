import { useMemo, useRef, useState } from "react";
import AccordionCard from "./AccordionCard";
import cardData from "../Data/carouselData";

function HeroCarouselSection() {
  const trackRef = useRef(null);
  const [cards, setCards] = useState([...cardData, ...cardData]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLocked, setIsLocked] = useState(false);

  const handleCardClick = (clickedIdx) => {
    if (isLocked || isAnimating || clickedIdx === currentIdx) return;

    setIsLocked(true);

    setTimeout(() => {
      setIsLocked(false);
    }, 1000);

    const distanceToMove = clickedIdx - currentIdx;
    if (distanceToMove <= 0) return;

    const track = trackRef.current;
    if (!track) return;

    setIsAnimating(true);

    const currentCard = track.children[currentIdx];
    const clickedCard = track.children[clickedIdx];

    if (currentCard) currentCard.classList.remove("expanded");
    if (clickedCard) clickedCard.classList.add("expanded");

    const cardWidth = 72 + 12;

    track.style.transform = `translateX(-${distanceToMove * cardWidth}px)`;

    setTimeout(() => {
      setCards((prev) => {
        const updated = [...prev];
        for (let i = 0; i < distanceToMove; i++) {
          updated.push(updated.shift());
        }
        return updated;
      });

      track.style.transition = "none";
      track.style.transform = "translateX(0)";
      void track.offsetHeight;
      track.style.transition = "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)";

      setCurrentIdx(0);
      setIsAnimating(false);
    }, 700);
  };

  const handleNextMobile = () => {
    if (window.innerWidth > 768) return;
    setCurrentIdx((prev) => (prev + 1) % cards.length);
  };

  const handlePrevMobile = () => {
    if (window.innerWidth > 768) return;
    setCurrentIdx((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const renderedCards = useMemo(() => cards, [cards]);

  return (
    <section className="carousel-block">
      <div className="carousel-heading">
        <h1 className="carousel-title">Everything Your Operation Needs.</h1>
        <h1 className="carousel-title">One Platform. Every Function.</h1>
      </div>

      <div className={`carousel-container ${isLocked ? "is-locked" : ""}`}>
        <button
          className="carousel-nav carousel-nav--prev"
          onClick={handlePrevMobile}
          aria-label="Previous card"
          type="button"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M14.5 5.5L8 12l6.5 6.5" />
          </svg>
        </button>
        <div className="carousel-track" ref={trackRef}>
          {renderedCards.map((card, idx) => (
            <AccordionCard
              key={`${card.id}-${idx}`}
              data={card}
              idx={idx}
              isExpanded={idx === currentIdx}
              isMobileActive={idx === currentIdx}
              onClick={() => handleCardClick(idx)}
            />
          ))}
        </div>
        <button
          className="carousel-nav carousel-nav--next"
          onClick={handleNextMobile}
          aria-label="Next card"
          type="button"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9.5 5.5L16 12l-6.5 6.5" />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default HeroCarouselSection;