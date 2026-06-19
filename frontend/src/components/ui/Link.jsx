import { navigate } from '../../hooks/useRoute.js';

export default function Link({ href, children, className, onClick }) {
  return (
    <a
      href={href}
      className={className}
      onClick={(event) => {
        event.preventDefault();
        onClick?.(event);
        navigate(href);
      }}
    >
      {children}
    </a>
  );
}
