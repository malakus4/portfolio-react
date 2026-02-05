function Section({ children, className = "" }) {
  return (
    <section className={`py-14 sm:py-16 ${className}`}>

      {children}
    </section>
  );
}

export default Section;
