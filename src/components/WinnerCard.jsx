export default function WinnerCard({
  title,
  name,
  points
}) {
  return (
    <div className="winner-card">

      <div className="winner-title">
        {title}
      </div>

      <div className="winner-name">
        {name}
      </div>

      <div className="winner-trophy">
        🏆
      </div>

      <div className="winner-points">
        {points}
      </div>

    </div>
  );
}