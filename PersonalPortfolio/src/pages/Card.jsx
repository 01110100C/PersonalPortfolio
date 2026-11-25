import "./Card.css";

function Card({ title, children, className = "" }) {
  return (
    <section className={`retro-card ${className}`}>
      {title && (
        <div className="retro-card__bar">
          <h2 className="retro-card__title">{title}</h2>
          <div className="retro-card__controls" aria-hidden="true">
            <span />
            <span />
          </div>
        </div>
      )}
      <div className="retro-card__body">{children}</div>
    </section>
  );
}

export default Card;
