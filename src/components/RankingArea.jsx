export default function RankingArea({ data }) {

  return (
    <section className="ranking-section">

      <div className="section-title right">
        <span>POR ÁREA</span>
        <span className="plus">+</span>
      </div>

      <div className="podium area-podium">

        {data.map((area, index) => (
          <div
            className={`podium-item position-${index + 1}`}
            key={area.name}
          >

            <div className="podium-name">
              {area.name}
            </div>

            <div className="podium-cup">
              🏆
            </div>

            <div className="podium-points">
              {area.points}
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}