import React, { useState } from 'react';
import { Gauge, Zap, Sparkles, Navigation } from 'lucide-react';

export const FleetCarLoop: React.FC = () => {
  const [speedBoost, setSpeedBoost] = useState(false);

  return (
    <div className="fleet-car-loop-wrapper" style={{ marginTop: '2.25rem', width: '100%', position: 'relative' }}>
      {/* Top Header / Telemetry Bar */}
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '0.85rem',
          flexWrap: 'wrap',
          gap: '0.65rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.45rem',
            backgroundColor: 'rgba(245, 184, 0, 0.15)',
            border: '1px solid #F5B800',
            borderRadius: '20px',
            padding: '0.25rem 0.75rem',
            backdropFilter: 'blur(6px)'
          }}>
            <span style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              backgroundColor: '#F5B800',
              boxShadow: '0 0 8px #F5B800',
              animation: 'pulseGold 1.5s infinite'
            }} />
            <span style={{
              color: '#F5B800',
              fontFamily: 'Montserrat',
              fontWeight: 800,
              fontSize: '0.68rem',
              letterSpacing: '1.2px',
              textTransform: 'uppercase'
            }}>
              LIVE FLEET ROTATION
            </span>
          </div>

          <span style={{ color: '#94A3B8', fontSize: '0.74rem', fontFamily: 'Montserrat', fontWeight: 600 }} className="loop-subheading">
            Suzuki S-Presso & Toyota Corolla • Variable Speed Telemetry
          </span>
        </div>

        {/* Speed Mode Interactive Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button
            onClick={() => setSpeedBoost(!speedBoost)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              backgroundColor: speedBoost ? '#F5B800' : 'rgba(12, 17, 27, 0.85)',
              color: speedBoost ? '#000000' : '#F5B800',
              border: '1px solid #F5B800',
              borderRadius: '20px',
              padding: '0.25rem 0.75rem',
              fontSize: '0.7rem',
              fontFamily: 'Montserrat',
              fontWeight: 800,
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              boxShadow: speedBoost ? '0 0 15px rgba(245, 184, 0, 0.5)' : 'none',
              touchAction: 'manipulation'
            }}
            title="Toggle Turbo Speed Mode"
          >
            {speedBoost ? <Zap size={13} fill="#000" /> : <Gauge size={13} />}
            <span>{speedBoost ? 'TURBO BOOST ON' : 'SLOW ➔ FAST CRUISE'}</span>
          </button>
        </div>
      </div>

      {/* Roadway Track Canvas Box */}
      <div 
        className="car-track-container"
        style={{
          position: 'relative',
          width: '100%',
          height: '175px',
          background: 'linear-gradient(180deg, #090D15 0%, #0F1622 50%, #090D15 100%)',
          border: '2px solid #F5B800',
          borderRadius: '14px',
          overflow: 'hidden',
          boxShadow: '0 15px 40px rgba(0, 0, 0, 0.85), inset 0 0 25px rgba(245, 184, 0, 0.08), 0 0 20px rgba(245, 184, 0, 0.15)',
          boxSizing: 'border-box'
        }}
      >
        {/* Asphalt Texture and Road Surface Grid */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(245, 184, 0, 0.08) 1px, transparent 1px)',
          backgroundSize: '18px 18px',
          opacity: 0.6,
          pointerEvents: 'none'
        }} />

        {/* Upper Lane Highway Boundary Line */}
        <div style={{
          position: 'absolute',
          top: '14px',
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(245, 184, 0, 0.35) 15%, rgba(245, 184, 0, 0.35) 85%, transparent 100%)'
        }} />

        {/* Center Animated Dashed Yellow Divider */}
        <div 
          className={`road-center-divider ${speedBoost ? 'fast-road' : ''}`}
          style={{
            position: 'absolute',
            top: '50%',
            left: 0,
            width: '200%',
            height: '2px',
            backgroundImage: 'repeating-linear-gradient(90deg, #F5B800 0px, #F5B800 24px, transparent 24px, transparent 48px)',
            transform: 'translateY(-50%)',
            opacity: 0.65,
            boxShadow: '0 0 8px rgba(245, 184, 0, 0.4)'
          }}
        />

        {/* Lower Lane Highway Boundary Line */}
        <div style={{
          position: 'absolute',
          bottom: '14px',
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(245, 184, 0, 0.35) 15%, rgba(245, 184, 0, 0.35) 85%, transparent 100%)'
        }} />

        {/* Road Waypoint Markers / Visual HUD Labels */}
        <div style={{
          position: 'absolute',
          left: '18px',
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          opacity: 0.28,
          pointerEvents: 'none'
        }}>
          <Navigation size={14} color="#F5B800" style={{ transform: 'rotate(-90deg)' }} />
          <span style={{ color: '#F5B800', fontFamily: 'Montserrat', fontWeight: 900, fontSize: '0.65rem', letterSpacing: '2px' }}>
            LOOP TURN ➔
          </span>
        </div>

        <div style={{
          position: 'absolute',
          right: '18px',
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          opacity: 0.28,
          pointerEvents: 'none'
        }}>
          <span style={{ color: '#F5B800', fontFamily: 'Montserrat', fontWeight: 900, fontSize: '0.65rem', letterSpacing: '2px' }}>
            ➔ DISPATCH ENTRY
          </span>
          <Navigation size={14} color="#F5B800" style={{ transform: 'rotate(90deg)' }} />
        </div>

        {/* ========================================================
            CAR 1: SUZUKI S-PRESSO (LOOPING CAR WITH SLOW -> FAST SPEEDS)
           ======================================================== */}
        <div 
          className={`car-spresso-anim-wrapper ${speedBoost ? 'turbo-mode-car1' : ''}`}
          style={{
            position: 'absolute',
            zIndex: 12,
            pointerEvents: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          {/* Live Speed / Telemetry Tag */}
          <div 
            className="car-hud-pill pill-spresso"
            style={{
              backgroundColor: 'rgba(7, 10, 17, 0.88)',
              border: '1px solid #F5B800',
              borderRadius: '10px',
              padding: '1px 6px',
              marginBottom: '3px',
              display: 'flex',
              alignItems: 'center',
              gap: '3px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.6)'
            }}
          >
            <span style={{ color: '#F5B800', fontSize: '0.58rem', fontFamily: 'Montserrat', fontWeight: 900 }}>
              IKAPA #01
            </span>
            <span style={{ color: '#CBD5E1', fontSize: '0.52rem', fontFamily: 'Montserrat', fontWeight: 700 }}>
              • S-PRESSO
            </span>
          </div>

          {/* Car Vehicle Container */}
          <div style={{ position: 'relative', display: 'inline-block' }}>
            {/* Front Headlight Light Beam (Left-Facing) */}
            <div 
              className="headlight-beam beam-left"
              style={{
                position: 'absolute',
                top: '52%',
                left: '-45px',
                width: '65px',
                height: '24px',
                background: 'linear-gradient(90deg, rgba(255, 240, 180, 0.45) 0%, rgba(245, 184, 0, 0.2) 60%, transparent 100%)',
                clipPath: 'polygon(100% 35%, 0% 0%, 0% 100%, 100% 65%)',
                transform: 'translateY(-50%) rotate(180deg)',
                pointerEvents: 'none'
              }}
            />

            {/* Rear Exhaust Speed Flame / Wind Trail during Fast phase */}
            <div 
              className="speed-trail-tail"
              style={{
                position: 'absolute',
                top: '55%',
                right: '-28px',
                width: '32px',
                height: '10px',
                background: 'linear-gradient(90deg, rgba(245, 184, 0, 0.8) 0%, transparent 100%)',
                borderRadius: '4px',
                transform: 'translateY(-50%)',
                opacity: 0
              }}
            />

            {/* Car Image */}
            <img 
              src="/assets/ikapa_car_spresso.png" 
              alt="IKAPA Fleet Suzuki S-Presso" 
              className="car-vehicle-img img-spresso"
              style={{
                height: '52px',
                width: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 6px 10px rgba(0, 0, 0, 0.85)) drop-shadow(0 0 6px rgba(245, 184, 0, 0.2))'
              }}
            />

            {/* Asphalt Ground Contact Shadow */}
            <div style={{
              position: 'absolute',
              bottom: '-2px',
              left: '5%',
              width: '90%',
              height: '6px',
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
              borderRadius: '50%',
              filter: 'blur(3px)'
            }} />
          </div>
        </div>


        {/* ========================================================
            CAR 2: TOYOTA COROLLA (INCOMING CAR WITH SLOW -> FAST DISPATCH)
           ======================================================== */}
        <div 
          className={`car-corolla-anim-wrapper ${speedBoost ? 'turbo-mode-car2' : ''}`}
          style={{
            position: 'absolute',
            zIndex: 10,
            pointerEvents: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          {/* Live Speed / Telemetry Tag */}
          <div 
            className="car-hud-pill pill-corolla"
            style={{
              backgroundColor: 'rgba(7, 10, 17, 0.88)',
              border: '1px solid #38BDF8',
              borderRadius: '10px',
              padding: '1px 6px',
              marginBottom: '3px',
              display: 'flex',
              alignItems: 'center',
              gap: '3px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.6)'
            }}
          >
            <span style={{ color: '#38BDF8', fontSize: '0.58rem', fontFamily: 'Montserrat', fontWeight: 900 }}>
              IKAPA #02
            </span>
            <span style={{ color: '#CBD5E1', fontSize: '0.52rem', fontFamily: 'Montserrat', fontWeight: 700 }}>
              • COROLLA SEDAN
            </span>
          </div>

          {/* Car Vehicle Container */}
          <div style={{ position: 'relative', display: 'inline-block' }}>
            {/* Front Headlight Light Beam (Left-Facing) */}
            <div 
              className="headlight-beam beam-left"
              style={{
                position: 'absolute',
                top: '55%',
                left: '-55px',
                width: '75px',
                height: '26px',
                background: 'linear-gradient(90deg, rgba(220, 245, 255, 0.5) 0%, rgba(56, 189, 248, 0.25) 60%, transparent 100%)',
                clipPath: 'polygon(100% 35%, 0% 0%, 0% 100%, 100% 65%)',
                transform: 'translateY(-50%) rotate(180deg)',
                pointerEvents: 'none'
              }}
            />

            {/* Rear Exhaust Speed Flame / Wind Trail during Fast phase */}
            <div 
              className="speed-trail-tail-corolla"
              style={{
                position: 'absolute',
                top: '55%',
                right: '-32px',
                width: '36px',
                height: '10px',
                background: 'linear-gradient(90deg, rgba(56, 189, 248, 0.8) 0%, transparent 100%)',
                borderRadius: '4px',
                transform: 'translateY(-50%)',
                opacity: 0
              }}
            />

            {/* Car Image */}
            <img 
              src="/assets/ikapa_car_corolla.png" 
              alt="IKAPA Fleet Toyota Corolla" 
              className="car-vehicle-img img-corolla"
              style={{
                height: '52px',
                width: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 6px 10px rgba(0, 0, 0, 0.85)) drop-shadow(0 0 6px rgba(56, 189, 248, 0.2))'
              }}
            />

            {/* Asphalt Ground Contact Shadow */}
            <div style={{
              position: 'absolute',
              bottom: '-2px',
              left: '5%',
              width: '90%',
              height: '6px',
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
              borderRadius: '50%',
              filter: 'blur(3px)'
            }} />
          </div>
        </div>

        {/* Ambient Subtle Pulsing Highway Corner Accents */}
        <div style={{
          position: 'absolute',
          bottom: '6px',
          right: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          color: 'rgba(245, 184, 0, 0.4)',
          fontSize: '0.62rem',
          fontFamily: 'Montserrat',
          fontWeight: 800
        }}>
          <Sparkles size={11} />
          <span>REAL-TIME IKAPA ACTIVE FLEET</span>
        </div>
      </div>

      <style>{`
        @keyframes pulseGold {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.2); }
        }

        /* Animated Road Dashed Center Divider Line */
        @keyframes moveRoadDivider {
          0% { transform: translate(0, -50%); }
          100% { transform: translate(-48px, -50%); }
        }

        .road-center-divider {
          animation: moveRoadDivider 0.85s linear infinite;
        }
        .road-center-divider.fast-road {
          animation: moveRoadDivider 0.4s linear infinite;
        }

        /* ========================================================
           CAR 1 (SUZUKI S-PRESSO) LOOP TRAJECTORY:
           0% -> 30%: Drives in from Right on Lower Lane (SLOW CRUISING)
           30% -> 50%: Sudden Turbo Acceleration across screen (FAST SPEED BURST)
           50% -> 70%: Loops upward around left corner into Upper Lane, flips to face right (SLOW TURNAROUND)
           70% -> 90%: Drives back to the right on Upper Lane (MODERATE/FAST)
           90% -> 100%: Loops back down to Lower Lane on the right, seamlessly restarting!
           ======================================================== */
        @keyframes spressoLoopMotion {
          /* Phase 1: Enter lower lane, driving SLOW (right to left) */
          0% {
            top: 88px;
            left: 105%;
            transform: scaleX(1) scale(0.95);
            opacity: 1;
          }
          28% {
            top: 88px;
            left: 60%;
            transform: scaleX(1) scale(1);
          }

          /* Phase 2: FAST ACCELERATION BLAST across left side! */
          48% {
            top: 88px;
            left: -8%;
            transform: scaleX(1) scale(1.02);
          }

          /* Phase 3: Loop upward and rotate around to Upper Lane */
          52% {
            top: 50px;
            left: -12%;
            transform: scaleX(1) scale(0.92) rotate(-8deg);
          }
          58% {
            top: 18px;
            left: -6%;
            transform: scaleX(-1) scale(0.88) rotate(4deg);
          }

          /* Phase 4: Drive SLOW then accelerate right across Upper Lane */
          75% {
            top: 18px;
            left: 55%;
            transform: scaleX(-1) scale(0.9);
          }
          88% {
            top: 18px;
            left: 106%;
            transform: scaleX(-1) scale(0.92);
          }

          /* Phase 5: Loop back down to Lower Lane on the far right */
          93% {
            top: 52px;
            left: 108%;
            transform: scaleX(1) scale(0.92) rotate(6deg);
          }
          100% {
            top: 88px;
            left: 105%;
            transform: scaleX(1) scale(0.95);
          }
        }

        .car-spresso-anim-wrapper {
          animation: spressoLoopMotion 11s cubic-bezier(0.42, 0, 0.58, 1) infinite;
        }
        .turbo-mode-car1 {
          animation: spressoLoopMotion 6.5s cubic-bezier(0.42, 0, 0.58, 1) infinite !important;
        }

        /* ========================================================
           CAR 2 (TOYOTA COROLLA) ONCOMING / CONVOY TRAJECTORY:
           Timed counter-phase: Starts coming in while Car 1 is looping,
           drives slow, then accelerates fast past the center lane!
           ======================================================== */
        @keyframes corollaIncomingMotion {
          /* Phase 1: Wait / Enter smoothly from right (SLOW INCOMING) */
          0% {
            top: 82px;
            left: 115%;
            transform: scaleX(1) scale(0.96);
            opacity: 0.4;
          }
          20% {
            top: 82px;
            left: 100%;
            transform: scaleX(1) scale(1);
            opacity: 1;
          }
          42% {
            top: 82px;
            left: 68%;
            transform: scaleX(1) scale(1);
          }

          /* Phase 2: FULL THROTTLE ACCELERATION BLAST! (FAST ZOOM) */
          65% {
            top: 82px;
            left: -20%;
            transform: scaleX(1) scale(1.05);
            opacity: 1;
          }

          /* Phase 3: Repositioning cycle off-screen */
          75% {
            top: 24px;
            left: -25%;
            transform: scaleX(-1) scale(0.85);
            opacity: 0;
          }
          90% {
            top: 24px;
            left: 115%;
            transform: scaleX(-1) scale(0.85);
            opacity: 0;
          }
          100% {
            top: 82px;
            left: 115%;
            transform: scaleX(1) scale(0.96);
            opacity: 0.4;
          }
        }

        .car-corolla-anim-wrapper {
          animation: corollaIncomingMotion 11s cubic-bezier(0.38, 0, 0.25, 1) infinite;
          animation-delay: -5s; /* Smooth phase offset so cars interplay seamlessly */
        }
        .turbo-mode-car2 {
          animation: corollaIncomingMotion 6.5s cubic-bezier(0.38, 0, 0.25, 1) infinite !important;
          animation-delay: -3s !important;
        }

        @media (max-width: 768px) {
          .car-track-container {
            height: 155px !important;
          }
          .img-spresso, .img-corolla {
            height: 42px !important;
          }
          .car-hud-pill {
            transform: scale(0.85);
            margin-bottom: 1px !important;
          }
          .headlight-beam {
            transform: translateY(-50%) rotate(180deg) scale(0.8) !important;
          }
        }

        @media (max-width: 480px) {
          .loop-subheading {
            display: none !important;
          }
          .car-track-container {
            height: 140px !important;
          }
          .img-spresso, .img-corolla {
            height: 36px !important;
          }
        }
      `}</style>
    </div>
  );
};
