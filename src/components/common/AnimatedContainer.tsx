
import React, { useRef, useState, useEffect } from "react";

interface AnimatedContainerProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedContainer = ({ 
  children, 
  className = "", 
  delay = 0 
}: AnimatedContainerProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  const delayStyle = delay ? { transitionDelay: `${delay}ms` } : {};
  
  return (
    <div 
      ref={containerRef}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
      style={delayStyle}
    >
      {children}
    </div>
  );
};

export default AnimatedContainer;
