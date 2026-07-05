export function MeshTexture({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="weave" width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="14" stroke="currentColor" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#weave)" />
    </svg>
  );
}
