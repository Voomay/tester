import React, { useState } from 'react';
import { Gauge, Zap, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';

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
              DUAL-LANE ACTIVE FLEET
            </span>
          </div>

          <span style={{ color: '#94A3B8', fontSize: '0.74rem', fontFamily: 'Montserrat', fontWeight: 600 }} className="loop-subheading">
            Opposing Highway Lanes • Slow & Fast Acceleration
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
            title="Toggle Speed Boost"
          >
            {speedBoost ? <Zap size={13} fill="#000" /> : <Gauge size={13} />}
            <span>{speedBoost ? 'TURBO SPEED' : 'SLOW ➔ FAST CRUISE'}</span>
          </button>
        </div>
      </div>

      {/* Dual-Lane Roadway Track Canvas Box */}
      <div 
        className="car-track-container"
        style={{
          position: 'relative',
          width: '100%',
          height: '165px',
          background: 'linear-gradient(180deg, #080C14 0%, #111827 50%, #080C14 100%)',
          border: '2px solid #F5B800',
          borderRadius: '14px',
          overflow: 'hidden',
          boxShadow: '0 15px 40px rgba(0, 0, 0, 0.85), inset 0 0 25px rgba(245, 184, 0, 0.08), 0 0 20px rgba(245, 184, 0, 0.15)',
          boxSizing: 'border-box'
        }}
      >
        {/* Asphalt Road Surface Grid Texture */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(245, 184, 0, 0.06) 1px, transparent 1px)',
          backgroundSize: '16px 16px',
          opacity: 0.7,
          pointerEvents: 'none'
        }} />

        {/* Top Outer Highway Border */}
        <div style={{
          position: 'absolute',
          top: '8px',
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(245, 184, 0, 0.3) 10%, rgba(245, 184, 0, 0.3) 90%, transparent 100%)'
        }} />

        {/* TOP LANE: Direction Indicators (Left to Right ➔) */}
        <div style={{
          position: 'absolute',
          top: '12px',
          left: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '0.35rem',
          opacity: 0.22,
          pointerEvents: 'none'
        }}>
          <span style={{ color: '#38BDF8', fontFamily: 'Montserrat', fontWeight: 900, fontSize: '0.62rem', letterSpacing: '1.5px' }}>
            TOP LANE ➔
          </span>
          <ArrowRight size={12} color="#38BDF8" />
        </div>

        {/* CENTER ANIMATED DASHED YELLOW DIVIDER */}
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
            opacity: 0.6,
            boxShadow: '0 0 8px rgba(245, 184, 0, 0.35)'
          }}
        />

        {/* BOTTOM LANE: Direction Indicators (Right to Left ←) */}
        <div style={{
          position: 'absolute',
          bottom: '12px',
          right: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '0.35rem',
          opacity: 0.22,
          pointerEvents: 'none'
        }}>
          <ArrowLeft size={12} color="#F5B800" />
          <span style={{ color: '#F5B800', fontFamily: 'Montserrat', fontWeight: 900, fontSize: '0.62rem', letterSpacing: '1.5px' }}>
            BOTTOM LANE ←
          </span>
        </div>

        {/* Bottom Outer Highway Border */}
        <div style={{
          position: 'absolute',
          bottom: '8px',
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(245, 184, 0, 0.3) 10%, rgba(245, 184, 0, 0.3) 90%, transparent 100%)'
        }} />

        {/* ========================================================
            TOP LANE VEHICLE: TOYOTA COROLLA SEDAN (MOVING LEFT TO RIGHT ➔)
            Continuously driving across the top lane repeatedly.
            Always visible on screen with slow-then-fast acceleration.
           ======================================================== */}
        <div 
          className={`car-top-lane-wrapper ${speedBoost ? 'turbo-car-top' : ''}`}
          style={{
            position: 'absolute',
            top: '16px',
            zIndex: 10,
            pointerEvents: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          {/* HUD Tag */}
          <div 
            style={{
              backgroundColor: 'rgba(7, 10, 17, 0.9)',
              border: '1px solid #38BDF8',
              borderRadius: '8px',
              padding: '1px 6px',
              marginBottom: '2px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.7)'
            }}
          >
            <span style={{ color: '#38BDF8', fontSize: '0.55rem', fontFamily: 'Montserrat', fontWeight: 900 }}>
              IKAPA #02
            </span>
            <span style={{ color: '#CBD5E1', fontSize: '0.5rem', fontFamily: 'Montserrat', fontWeight: 700 }}>
              COROLLA
            </span>
          </div>

          {/* Vehicle Body (Flipped horizontally to face Right ➔) */}
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <img 
              src="/assets/ikapa_car_corolla.png" 
              alt="IKAPA Fleet Corolla" 
              className="car-lane-img img-corolla"
              style={{
                height: '48px',
                width: 'auto',
                display: 'block',
                transform: 'scaleX(-1)', // Face Right (direction of travel)
                filter: 'drop-shadow(0 6px 8px rgba(0, 0, 0, 0.85))'
              }}
            />
            {/* Ground Contact Shadow */}
            <div style={{
              position: 'absolute',
              bottom: '-2px',
              left: '6%',
              width: '88%',
              height: '5px',
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              borderRadius: '50%',
              filter: 'blur(3px)'
            }} />
          </div>
        </div>


        {/* ========================================================
            BOTTOM LANE VEHICLE: SUZUKI S-PRESSO (MOVING RIGHT TO LEFT ←)
            Continuously driving across the bottom lane repeatedly.
            Always visible on screen with slow-then-fast acceleration.
           ======================================================== */}
        <div 
          className={`car-bottom-lane-wrapper ${speedBoost ? 'turbo-car-bottom' : ''}`}
          style={{
            position: 'absolute',
            top: '84px',
            zIndex: 10,
            pointerEvents: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          {/* HUD Tag */}
          <div 
            style={{
              backgroundColor: 'rgba(7, 10, 17, 0.9)',
              border: '1px solid #F5B800',
              borderRadius: '8px',
              padding: '1px 6px',
              marginBottom: '2px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.7)'
            }}
          >
            <span style={{ color: '#F5B800', fontSize: '0.55rem', fontFamily: 'Montserrat', fontWeight: 900 }}>
              IKAPA #01
            </span>
            <span style={{ color: '#CBD5E1', fontSize: '0.5rem', fontFamily: 'Montserrat', fontWeight: 700 }}>
              S-PRESSO
            </span>
          </div>

          {/* Vehicle Body (Natural orientation facing Left ←) */}
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <img 
              src="/assets/ikapa_car_spresso.png" 
              alt="IKAPA Fleet S-Presso" 
              className="car-lane-img img-spresso"
              style={{
                height: '48px',
                width: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 6px 8px rgba(0, 0, 0, 0.85))'
              }}
            />
            {/* Ground Contact Shadow */}
            <div style={{
              position: 'absolute',
              bottom: '-2px',
              left: '6%',
              width: '88%',
              height: '5px',
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              borderRadius: '50%',
              filter: 'blur(3px)'
            }} />
          </div>
        </div>

        {/* Real-time Indicator Footer Accent */}
        <div style={{
          position: 'absolute',
          bottom: '5px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          color: 'rgba(245, 184, 0, 0.35)',
          fontSize: '0.6rem',
          fontFamily: 'Montserrat',
          fontWeight: 800,
          whiteSpace: 'nowrap',
          pointerEvents: 'none'
        }}>
          <Sparkles size={10} />
          <span>IKAPA CONSTANT FLEET MOBILITY</span>
        </div>
      </div>

      <style>{`
        @keyframes pulseGold {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.2); }
        }

        /* Center Dashed Highway Line Animation */
        @keyframes moveRoadDivider {
          0% { transform: translate(0, -50%); }
          100% { transform: translate(-48px, -50%); }
        }

        .road-center-divider {
          animation: moveRoadDivider 0.9s linear infinite;
        }
        .road-center-divider.fast-road {
          animation: moveRoadDivider 0.45s linear infinite;
        }

        /* ========================================================
           TOP LANE CAR MOTION (DRIVING LEFT TO RIGHT ➔):
           0% -> 40%: Slow steady cruising across left-to-mid section
           40% -> 75%: Sudden fast acceleration surge across mid-to-right!
           75% -> 100%: Smooth exit and immediate seamless return on left
           Ensures vehicle is visible on screen continuously!
           ======================================================== */
        @keyframes driveTopLaneEast {
          0% {
            left: -4%;
            opacity: 0.9;
          }
          38% {
            left: 28%;
            opacity: 1;
          }
          72% {
            left: 80%;
            opacity: 1;
          }
          96% {
            left: 101%;
            opacity: 1;
          }
          100% {
            left: 103%;
            opacity: 0;
          }
        }

        .car-top-lane-wrapper {
          animation: driveTopLaneEast 7.2s cubic-bezier(0.4, 0, 0.3, 1) infinite;
        }
        .turbo-car-top {
          animation: driveTopLaneEast 4.2s cubic-bezier(0.4, 0, 0.3, 1) infinite !important;
        }

        /* ========================================================
           BOTTOM LANE CAR MOTION (DRIVING RIGHT TO LEFT ←):
           0% -> 40%: Slow steady cruising across right-to-mid section
           40% -> 75%: Sudden fast acceleration surge across mid-to-left!
           75% -> 100%: Smooth exit and immediate seamless return on right
           Ensures vehicle is visible on screen continuously!
           ======================================================== */
        @keyframes driveBottomLaneWest {
          0% {
            left: 101%;
            opacity: 0.9;
          }
          38% {
            left: 68%;
            opacity: 1;
          }
          72% {
            left: 16%;
            opacity: 1;
          }
          96% {
            left: -5%;
            opacity: 1;
          }
          100% {
            left: -7%;
            opacity: 0;
          }
        }

        .car-bottom-lane-wrapper {
          animation: driveBottomLaneWest 7.2s cubic-bezier(0.4, 0, 0.3, 1) infinite;
          animation-delay: -3.6s; /* Offset so cars cross and pass each other continuously */
        }
        .turbo-car-bottom {
          animation: driveBottomLaneWest 4.2s cubic-bezier(0.4, 0, 0.3, 1) infinite !important;
          animation-delay: -2.1s !important;
        }

        @media (max-width: 768px) {
          .car-track-container {
            height: 145px !important;
          }
          .car-top-lane-wrapper {
            top: 12px !important;
          }
          .car-bottom-lane-wrapper {
            top: 72px !important;
          }
          .img-spresso, .img-corolla {
            height: 40px !important;
          }
        }

        @media (max-width: 480px) {
          .loop-subheading {
            display: none !important;
          }
          .car-track-container {
            height: 135px !important;
          }
          .car-top-lane-wrapper {
            top: 10px !important;
          }
          .car-bottom-lane-wrapper {
            top: 68px !important;
          }
          .img-spresso, .img-corolla {
            height: 34px !important;
          }
        }
      `}</style>
    </div>
  );
};
