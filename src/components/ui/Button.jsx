import { Link } from "react-router-dom";

export default function Button({ 
  children, 
  to, 
  href, 
  variant = 'primary', 
  className = '', 
  onClick, 
  ...props 
}) {
  // 1. Base styles applied to every button
  const baseStyles = "inline-flex items-center justify-center font-bold rounded transition-transform transition-colors duration-300";
  
  // 2. Variant dictionary using your custom high-contrast CSS variables
  const variants = {
    primary: "px-6 py-3 bg-[var(--cta-color)] text-white shadow-lg shadow-[var(--cta-color)]/20 hover:scale-105",
    secondary: "px-6 py-3 border border-[var(--card-border)] bg-[var(--btn-bg)] hover:border-[var(--accent-color)] text-[var(--text-primary)]",
    ghost: "px-4 py-2 hover:bg-[var(--card-bg)] hover:text-[var(--accent-color)] text-[var(--text-primary)] opacity-80 hover:opacity-100"
  };

  // Combine the base, the chosen variant, and any custom classes you pass in
  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  // Route Link (Internal)
  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  // Anchor Link (External)
  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes} {...props}>
        {children}
      </a>
    );
  }

  // Standard Action Button
  return (
    <button onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
}