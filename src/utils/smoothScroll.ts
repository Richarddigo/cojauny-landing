// Utility for smooth scrolling with proper offset
export const smoothScrollTo = (targetId: string) => {
    const headerHeight = 74; // Header height in pixels
    const element = document.getElementById(targetId);
    
    if (!element) return;
    
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
    
    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
};
