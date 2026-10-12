import type { SimpleIcon } from 'simple-icons';

type BrandIconProps = {
  icon: SimpleIcon;
  size?: number;
  // Chip and Button inject their icon class through cloneElement.
  className?: string;
};

/**
 * Decorative brand logo from Simple Icons (CC0). Rendered as a plain SVG with
 * no <title>: the visible label next to it already names the technology.
 */
export default function BrandIcon({ icon, size = 14, className }: BrandIconProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
    >
      <path d={icon.path} />
    </svg>
  );
}
