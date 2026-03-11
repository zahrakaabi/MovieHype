/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// UI Local Components
import Shimmer from "../shimmer";

// Styles
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                           PAGE SKELETON COMPONENT                          */
/* -------------------------------------------------------------------------- */
function PageSkeleton() {
/* -------------------------------- RENDERING ------------------------------- */
  return (
    <div className="page-skeleton">
      {/* Table */}
      <div className="page-skeleton__content wrapper">
        <div className="page-skeleton__toolbar flex items-center justify-between">
          <Shimmer style={{ width: 180, height: 16, borderRadius: 4 }} />
          <Shimmer style={{ width: 100, height: 36, borderRadius: 8 }} />
        </div>

        <div className="page-skeleton__table">
          {/* thead */}
          <div className="page-skeleton__thead">
            {["30%", "15%", "12%", "12%", "10%"].map((w, i) => (
              <Shimmer key={i} style={{ width: w, height: 12, borderRadius: 4 }} />
            ))}
          </div>

          {/* rows */}
          {Array.from({ length: 6 }).map((_, i) => (
            <div className="page-skeleton__row" key={i} style={{ animationDelay: `${i * 0.05}s` }}>
              <div className="page-skeleton__movie-cell">
                <Shimmer style={{ width: 40, height: 56, borderRadius: 4 }} />
                <div className="page-skeleton__movie-info">
                  <Shimmer style={{ width: "65%", height: 13, borderRadius: 4 }} />
                  <Shimmer style={{ width: "40%", height: 11, borderRadius: 4, marginTop: 6 }} />
                </div>
              </div>
              <Shimmer style={{ width: "55%", height: 13, borderRadius: 4 }} />
              <Shimmer style={{ width: 52, height: 22, borderRadius: 20 }} />
              <Shimmer style={{ width: 64, height: 22, borderRadius: 20 }} />
              <div className="page-skeleton__actions">
                <Shimmer style={{ width: 28, height: 28, borderRadius: 6 }} />
                <Shimmer style={{ width: 28, height: 28, borderRadius: 6 }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PageSkeleton;