export default function Container({ children }) {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      {children}
    </div>
  );
}
