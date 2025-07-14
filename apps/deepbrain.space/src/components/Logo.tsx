const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        className="text-blue-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 0 19.5v-15A2.5 2.5 0 0 1 2.5 2h7z" />
        <path d="M12 4.5A2.5 2.5 0 0 1 14.5 2h7A2.5 2.5 0 0 1 24 4.5v15a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 12 19.5v-15z" />
        <path d="M6 8h4" />
        <path d="M14 8h4" />
        <path d="M6 12h4" />
        <path d="M14 12h4" />
        <path d="M6 16h4" />
        <path d="M14 16h4" />
      </svg>
      <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
        DeepBrain.Space
      </span>
    </div>
  );
};

export default Logo;
