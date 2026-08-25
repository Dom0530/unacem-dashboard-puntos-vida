export default function RankingUser({ data }) {

  return (
    <section className="ranking-section">

      <div className="section-title">
        <span className="plus">+</span>
        <span>POR USUARIO</span>
      </div>

      <div className="podium">

        {data.map((user, index) => (
          <div
            className={`podium-item position-${index + 1}`}
            key={user.name}
          >

            <div className="podium-name">
              {user.name}
            </div>

            <div className="podium-cup">
              🏆
            </div>

            <div className="podium-points">
              {user.points}
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}