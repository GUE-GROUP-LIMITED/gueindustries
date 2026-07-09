import '@testing-library/jest-dom/vitest';

window.scrollTo = () => {};

class MockIntersectionObserver {
	observe() {}
	unobserve() {}
	disconnect() {}
}

window.IntersectionObserver = MockIntersectionObserver;
global.IntersectionObserver = MockIntersectionObserver;