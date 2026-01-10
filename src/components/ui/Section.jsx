function Section({ children, className = "" }) {
  return (
    <section
      className={`py-20 border-t border-gray-200/60 ${className}`}
    >
      {children}
    </section>
  );
}

export default Section;
