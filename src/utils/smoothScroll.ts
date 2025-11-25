// Utility for smooth scrolling with proper offset
export const smoothScrollTo = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (!element) return;
    const header = document.querySelector('header');
    const headerHeight = header ? header.getBoundingClientRect().height : 0;
    const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = Math.max(0, elementTop - headerHeight);
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
};
