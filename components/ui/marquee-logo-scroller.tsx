import React from 'react';
import { cn } from '@/lib/utils';

export interface Logo {
  name: string;
  gradient: {
    from: string;
    via: string;
    to: string;
  };
}

export interface MarqueeLogoScrollerProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  logos: Logo[];
  speed?: 'normal' | 'slow' | 'fast';
}

const MarqueeLogoScroller = React.forwardRef<HTMLDivElement, MarqueeLogoScrollerProps>(
  ({ title, description, logos, speed = 'normal', className, ...props }, ref) => {
    const durationMap = {
      normal: '40s',
      slow: '80s',
      fast: '15s',
    };
    const animationDuration = durationMap[speed];

    return (
      <>
        <style>{`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>
        
        <section
          ref={ref}
          aria-label={title || "Trusted By"}
          className={cn(
            'w-full bg-white text-primary overflow-hidden border-y border-primary/5',
            className
          )}
          {...props}
        >
          {/* Header Section */}
          <div className="px-6 md:px-20 py-12 pb-8 flex flex-col items-center text-center">
             <p className="font-sans font-medium text-secondary tracking-wider text-xs uppercase opacity-0 animate-fade-in-up">TRUSTED BY PROJECT PROFESSIONALS</p>
             <h3 className="font-anton text-2xl md:text-3xl text-primary uppercase mt-3 opacity-0 animate-fade-in-up delay-100">
               {title}
             </h3>
             <p className="font-sans text-sm text-tertiary max-w-2xl mt-4 opacity-0 animate-fade-in-up delay-200">
               {description}
             </p>
          </div>

          {/* Marquee Section */}
          <div
            className="w-full overflow-hidden pb-16 opacity-0 animate-fade-in-up delay-300"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            }}
          >
            <div 
              className="flex w-max items-center gap-6 py-4 pr-6 hover:[animation-play-state:paused] transition-all duration-300 ease-in-out" 
              style={{
                animation: `marquee ${animationDuration} linear infinite`,
              }}
            >
              {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
                <div
                  key={index}
                  className="group relative h-20 w-52 shrink-0 flex items-center justify-center rounded-2xl bg-primary/5 overflow-hidden border border-primary/5 hover:border-transparent transition-all duration-500 cursor-default shadow-sm hover:shadow-lg hover:-translate-y-1"
                >
                  <div
                    style={{
                      '--from': logo.gradient.from,
                      '--via': logo.gradient.via,
                      '--to': logo.gradient.to,
                    } as React.CSSProperties}
                    className="absolute inset-0 scale-150 opacity-0 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:scale-100 bg-gradient-to-br from-[var(--from)] via-[var(--via)] to-[var(--to)]"
                  />
                  <span className="relative z-10 font-anton text-xl md:text-2xl tracking-widest text-primary/60 group-hover:text-white transition-colors duration-500">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }
);

MarqueeLogoScroller.displayName = 'MarqueeLogoScroller';

export { MarqueeLogoScroller };
