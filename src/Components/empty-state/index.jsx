/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Styles
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                            EMPTY STATE COMPONENT                           */
/* -------------------------------------------------------------------------- */
function EmptyState({ icon, title, description }) {
/* -------------------------------- RENDERING ------------------------------- */
  return (
    <div className="empty-state flex flex-col items-center justify-center text-center">
      <span className="empty-state__icon">{icon}</span>
      <h3 className="empty-state__title">{title}</h3>
      <p className="empty-state__description">{description}</p>
    </div>
  )
};

export default EmptyState;