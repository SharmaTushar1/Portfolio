'use client';

import { useState, useRef, useCallback, useEffect } from 'react';

type LayoutVariant = 'stack' | 'inline';

const TOLERANCE = 6; // percent: thumb must be within ±TOLERANCE of target
const TRACK_WIDTH_PX = 280;
const THUMB_SIZE_PX = 40;

function getRandomTarget() {
  return Math.floor(25 + Math.random() * 50); // 25% to 75%
}

export default function RevealAfterRobotCheck({
  children,
  variant = 'stack',
}: {
  children: React.ReactNode;
  variant?: LayoutVariant;
}) {
  const [verified, setVerified] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [targetPosition, setTargetPosition] = useState(50);
  const [position, setPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [success, setSuccess] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const openModal = useCallback(() => {
    setTargetPosition(getRandomTarget());
    setPosition(0);
    setSuccess(false);
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
    setPosition(0);
    setSuccess(false);
  }, []);

  const updatePosition = useCallback(
    (clientX: number) => {
      const track = trackRef.current;
      if (!track) return;
      const rect = track.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const pct = (x / rect.width) * 100;
      setPosition(pct);
      const inRange = Math.abs(pct - targetPosition) <= TOLERANCE;
      if (inRange && !success) {
        setSuccess(true);
        const t = setTimeout(() => {
          setVerified(true);
          closeModal();
        }, 500);
        return () => clearTimeout(t);
      }
    },
    [targetPosition, success, closeModal]
  );

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (success) return;
      e.preventDefault();
      (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
      setIsDragging(true);
      updatePosition(e.clientX);
    },
    [success, updatePosition]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging || success) return;
      updatePosition(e.clientX);
    },
    [isDragging, success, updatePosition]
  );

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
    if (!success) setPosition(0);
  }, [success]);

  useEffect(() => {
    if (!modalOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [modalOpen, closeModal]);

  if (verified) {
    return <>{children}</>;
  }

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className={`
          text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline
          ${variant === 'inline' ? 'inline-flex' : 'block'}
        `}
      >
        Verify to show contact details
      </button>

      {modalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && closeModal()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="verify-dialog-title"
        >
          <div
            className="w-full max-w-sm rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 shadow-xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 id="verify-dialog-title" className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                Verify to show contact details
              </h2>
              <button
                type="button"
                onClick={closeModal}
                className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
              Drag the slider to the line to verify.
            </p>

            <div className="relative" style={{ width: TRACK_WIDTH_PX }}>
              {/* Track with target line */}
              <div
                ref={trackRef}
                role="slider"
                aria-label="Drag to the marked position"
                aria-valuenow={Math.round(position)}
                aria-valuemin={0}
                aria-valuemax={100}
                tabIndex={0}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerLeave={handlePointerUp}
                className={`
                  relative h-12 rounded-full border-2 border-zinc-300 dark:border-zinc-600
                  bg-zinc-100 dark:bg-zinc-800 select-none
                  cursor-grab active:cursor-grabbing
                  ${success ? 'border-green-500 dark:border-green-600' : ''}
                `}
              >
                {/* Target position line */}
                <div
                  className="absolute top-0 bottom-0 w-0.5 bg-primary-500 dark:bg-primary-400 z-10 pointer-events-none"
                  style={{ left: `${targetPosition}%` }}
                  aria-hidden
                />
                {/* Fill up to thumb */}
                <div
                  className="absolute inset-y-0 left-0 rounded-l-full bg-primary-500/20 dark:bg-primary-400/20 transition-all duration-75"
                  style={{ width: `${position}%` }}
                />
                {/* Thumb with arrow */}
                <div
                  className={`
                    absolute top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full
                    shadow-md transition-colors duration-200
                    ${success
                      ? 'bg-green-500 dark:bg-green-600 text-white'
                      : 'bg-white dark:bg-zinc-700 border-2 border-zinc-300 dark:border-zinc-600'
                    }
                  `}
                  style={{
                    left: `max(0px, min(calc(${position}% - ${THUMB_SIZE_PX / 2}px), calc(100% - ${THUMB_SIZE_PX}px)))`,
                    width: THUMB_SIZE_PX,
                    height: THUMB_SIZE_PX,
                  }}
                >
                  {success ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-zinc-500 dark:text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </div>
              </div>
              {success && (
                <p className="mt-2 text-center text-sm font-medium text-green-600 dark:text-green-400">
                  Verified!
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
