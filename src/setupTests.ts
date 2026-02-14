import '@testing-library/jest-dom';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
    addListener: jest.fn(),
    removeListener: jest.fn(),
  })),
});

jest.mock('framer-motion', () => {
  const React = require('react');

  return {
    motion: {
      div: React.forwardRef((props: any, ref: any) => {
        const {
          animate: _animate,
          initial: _initial,
          transition: _transition,
          variants: _variants,
          viewport: _viewport,
          whileHover: _whileHover,
          whileInView: _whileInView,
          ...rest
        } = props;

        return React.createElement('div', { ...rest, ref }, props.children);
      }),
    },
  };
});
