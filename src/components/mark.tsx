export function Mark({ className = "h-8 w-11" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 72 48"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M31 16c0-6.4-5.6-10.4-11.4-8.2-4-5.8-13.2-5.6-15.6 1.6C-1.2 10.6-5 16 2.6 21.4c-4 2-5.8 7.4-3 11.4C2 38.4 9.2 40.6 15 38.6h13.4"
        stroke="#9AA1A9"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d="M34 18.2c2-8 11.2-12 19-8 5.8-6 15.4-4 17.6 4 7.6 1 11.6 8.8 8 15.4-1 7.8-9.4 13.2-17.2 11.4H36.6c-5.8 0-9.6-5.8-7.8-11.2.2-4 2-7.8 5.2-11.6Z"
        fill="#1F4E9B"
      />
      <path
        d="M46 28.5c4 .2 7.6 2.4 9.6 6"
        stroke="#E7F1F8"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
