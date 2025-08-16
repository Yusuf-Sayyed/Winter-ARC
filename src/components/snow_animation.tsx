import { useEffect } from "react";

export function SnowAnimation() {
  useEffect(() => {
    const snowContainer = document.getElementById('snow-container');
    if (!snowContainer) return;
    
    const snowflakeSymbols = ['❄', '❅', '❆', '⋄'];
    
    function createSnowflake() {
      const snowflake = document.createElement('div');
      snowflake.className = 'fixed pointer-events-none z-10 text-white animate-snow-fall';
      snowflake.innerHTML = snowflakeSymbols[Math.floor(Math.random() * snowflakeSymbols.length)];
      
      // Random positioning and size
      snowflake.style.left = Math.random() * 100 + 'vw';
      snowflake.style.fontSize = (Math.random() * 20 + 10) + 'px';
      snowflake.style.opacity = (Math.random() * 0.8 + 0.2).toString();
      snowflake.style.animationDuration = (Math.random() * 3 + 7) + 's';
      snowflake.style.animationDelay = Math.random() * 2 + 's';
      
      if (snowContainer) {
        snowContainer.appendChild(snowflake);
      }
      
      // Remove snowflake after animation
      setTimeout(() => {
        if (snowflake.parentNode) {
          snowflake.parentNode.removeChild(snowflake);
        }
      }, 12000);
    }
    
    // Create snowflakes continuously
    const intervalId = setInterval(createSnowflake, 300);
    
    // Create initial batch
    for (let i = 0; i < 20; i++) {
      setTimeout(createSnowflake, i * 100);
    }
    
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <div id="snow-container" className="fixed inset-0 pointer-events-none z-10" />;
}
