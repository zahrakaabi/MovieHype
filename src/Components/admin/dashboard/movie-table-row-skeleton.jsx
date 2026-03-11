/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// UI Local Components
import { Shimmer } from '../../skeletons';

/* -------------------------------------------------------------------------- */
/*                     MOVIE TABLE ROW SKELETON COMPONENT                     */
/* -------------------------------------------------------------------------- */
export function MovieTableRowSkeleton() {
/* -------------------------------- RENDERING ------------------------------- */
  return (
    <tr className="movie-table-row-skeleton">
      <td className="skeleton-movie-cell flex items-center">
        <Shimmer style={{ width: 40, height: 56, borderRadius: 4 }} />
        <Shimmer style={{ width: "40%", height: 11, borderRadius: 4, marginTop: 1 }} />
      </td>
      <td><Shimmer style={{ width: 40, height: 13, borderRadius: 4 }} /></td>
      <td><Shimmer style={{ width: 52, height: 22, borderRadius: 20 }} /></td>
      <td><Shimmer style={{ width: 64, height: 22, borderRadius: 20 }} /></td>
      <td>
        <div className="skeleton-actions flex">
          <Shimmer style={{ width: 28, height: 28, borderRadius: 6 }} />
          <Shimmer style={{ width: 28, height: 28, borderRadius: 6 }} />
        </div>
      </td>
    </tr>
  )
};

/* -------------------------------------------------------------------------- */
/*                       MOVIE TABLE SKELETON COMPONENT                       */
/* -------------------------------------------------------------------------- */
export function MovieTableSkeleton({ rows = 6 }) {
/* -------------------------------- RENDERING ------------------------------- */
  return Array.from({ length: rows }).map((_, i) => (
    <MovieTableRowSkeleton key={i} />
  ));
};