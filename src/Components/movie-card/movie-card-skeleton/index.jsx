/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// UI Local Components
import { Shimmer } from '../../skeletons';

// Styles
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                          MOVIE SKELETON COMPONENTS                         */
/* -------------------------------------------------------------------------- */
function MovieCardSkeleton() {
/* -------------------------------- RENDERNIG ------------------------------- */
  return (
    <div className="movie-card-skeleton">
    {/* Poster */}
    <Shimmer style={{ width: "100%", height: 300, borderRadius: 10 }} />

    {/* Title */}
    <Shimmer style={{ height: 14, width: "40%", borderRadius: 6, marginTop: '1rem' }} />

    {/* Bottom row: icons + title */}
    <div className="flex justify-between items-center" style={{ marginTop: '1rem' }}>
      {/* Year */}
      <Shimmer style={{ height: 14, width: "50%", borderRadius: 6 }} />
      
      {/* Icons group */}
      <div style={{ display: "flex", gap: 8 }}>
        <Shimmer style={{ width: 22, height: 22, borderRadius: "50%" }} />
        <Shimmer style={{ width: 22, height: 22, borderRadius: "50%" }} />
        <Shimmer style={{ width: 22, height: 22, borderRadius: "50%" }} />
      </div>
    </div>
  </div>
  )
};

export default MovieCardSkeleton;