import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import heroImage from "../assets/hero-1.png";

gsap.registerPlugin(ScrollTrigger);

function AnimateApoCorp() {
    const sectionRef = useRef(null);

    useGSAP(() => {

        gsap.set(".apo-glass-card", { visibility: "hidden" });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "+=350%", // Snappier scroll
                scrub: 1,
                pin: true,
                // anticipatePin: 1
            }
        });

        // 1. Initial Logo Zoom & Entrance
        tl.fromTo("#zoom-logo",
            { scale: 8, opacity: 0 },
            { scale: 1, opacity: 1, duration: 2, ease: "power2.out" }
        );

        // 2. Logo moves up and transitions to the Header
        tl.to("#zoom-logo", {
            y: -100,
            scale: 0.5,
            opacity: 0,
            duration: 1.5,
            ease: "power2.inOut"
        }, "+=0.5");

        tl.to("#apo-header", {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out"
        }, "<0.6");

        // 3. Main content area reveal
        tl.to("#apo-content", {
            opacity: 1,
            duration: 1
        }, "-=0.4");


        // 4. Card Sequence: Next card rises from bottom behind, current slides down in front

        // --- Card 1 Entrance ---
        tl.set("#card-1", { visibility: "visible", opacity: 0, scale: 0.8, y: 300 });
        tl.to("#card-1", {
            opacity: 1,
            scale: 1,
            // y: 0,
            y: -16,
            duration: 2.5,
            ease: "power2.out"
        });

        // Hold Card 1
        tl.to({}, { duration: 1.5 });

        // --- Transition: Card 1 Exit (Front/Down) / Card 2 Entrance (Behind/Up) ---
        // Prepare Card 2 off-screen bottom, lower z-index
        tl.set("#card-2", { visibility: "visible", opacity: 0, scale: 0.8, y: 500, zIndex: 70 });
        tl.set("#card-1", { zIndex: 80 }); // Ensure it stays in front

        // Card 1 slides down and fades out
        tl.to("#card-1", {
            y: 600,
            opacity: 0,
            duration: 3,
            ease: "power2.inOut"
        });

        // Card 2 rises from bottom, scales up, and fades in
        tl.to("#card-2", {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 3,
            ease: "power2.out"
        }, "-=2.8"); // Overlap the movements

        // Hold Card 2
        tl.to({}, { duration: 1.5 });

        // --- Transition: Card 2 Exit (Front/Down) / Card 3 Entrance (Behind/Up) ---
        tl.set("#card-3", { visibility: "visible", opacity: 0, scale: 0.8, y: 500, zIndex: 60 });
        tl.set("#card-2", { zIndex: 70 });

        tl.to("#card-2", {
            y: 600,
            opacity: 0,
            duration: 3,
            ease: "power2.inOut"
        });

        tl.to("#card-3", {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 3,
            ease: "power2.out"
        }, "-=2.8");

        // Final hold
        tl.to({}, { duration: 2 });
    }, { scope: sectionRef });

    return (
        <section className="apo-scroll-section" ref={sectionRef}>
            <div className="apo-stage">

                <div className="apo-logo-container">
                    <div className="apo-logo-text" id="zoom-logo">ApoCorp</div>
                </div>
                <div className="apo-header" id="apo-header">
                    <h2 className="apo-kicker">Why ApoCorp</h2>
                    <p className="apo-subtext">Manufacturing is not a module here. It is the reason we exists.</p>
                </div>
                <div className="apo-main-content" id="apo-content">
                    <div className="apo-card-stack">
                        {/* <!-- Card 1 --> */}
                        <div className="apo-glass-card apo-glass-card--compact" id="card-1">
                            <span className="apo-card-number">01</span>
                            {/* <h3>Real-time Floor Visibility</h3>
                            <p>Every work order and batch is visible in your reports instantly. No delays, no manual syncing for full transparency across the shop floor.</p> */}
                            <div className="apo-card-copy">
                                <h3 className="apo-card-title apo-card-title--long">
                                    What is happening on your floor is visible in your reports right now.</h3>
                                {/* <br /> <br /> */}
                                <p>When a work order progresses, inventory updates. When a batch clears QC, dispatch is notified. When a shipment leaves the gate, finance records it.</p>
                                {/* <br /> */}
                                <p>There is no batch processing, no overnight sync, no morning catch-up. The system reflects reality as it moves.</p>
                            </div>
                            <div className="apo-card-media">
                                <img src={heroImage} alt="Factory operations dashboard"/>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Card 2 --> */}
                    <div className="apo-glass-card" id="card-2">
                        <span className="apo-card-number">02</span>
                        {/* <h3>Seamless Integration</h3>
                            <p>When a work order progresses, inventory updates automatically. When QC clears a batch, dispatch is notified immediately. Finance records it all.</p> */}
                            <div className="apo-card-copy">
                        <h3>Modular by Design</h3>
                        {/* <br /><br /> */}
                        <p>You do not need to implement everything on day one. Begin with the modules your operation needs most urgently. </p>
                        {/* <br /> */}
                        <p>Every module you add connects automatically to the ones already running. The same data, the same logic, the same system. Growth does not require re-implementation.</p>
                        </div>
                        <div className="apo-card-media">
                            <img src={heroImage} alt="Factory operations dashboard"/>
                        </div>
                    </div>
                    {/* <!-- Card 3 --> */}
                    <div className="apo-glass-card" id="card-3">
                        <span className="apo-card-number">03</span>
                        {/* <h3>Enterprise-Grade Security</h3>
                            <p>Your operational data and cost structures are sensitive. We protect them with top-tier encryption and zero-trust architecture built for industry.</p> */}
                            <div className="apo-card-copy">
                        <h3>Enterprise-Grade always on, security without compromise.</h3>
                        {/* <br /><br /> */}
                        <p>Your operational data, supplier prices, customer orders, cost structures is commercially sensitive. Where is it stored, who can access it, and what happens to it?</p>
                        {/* <br /> */}
                        <p>Your data is yours. Always. We host it securely, back it up continuously, and you can export everything at any time.</p>
                        </div>

                        <div className="apo-card-media">
                            <img src={heroImage} alt="Factory operations dashboard"/>
                        </div>
                    </div>
                </div>
            </div>
    </section >
    );
}

export default AnimateApoCorp;
