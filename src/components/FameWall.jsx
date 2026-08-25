export default function FameWall({
  title,
  data
}) {

  return (
    <section className="fame-wall">

      <h3>{title}</h3>

      <div className="fame-header">
        <span>Mes Año</span>
        <span>Ganador del Mes</span>
        <span>Puntos</span>
      </div>

      {data.map((item) => (

        <div
          className="fame-row"
          key={`${item.month}-${item.name}`}
        >

          <span>
            {item.month}
          </span>

          <span>
            {item.name}
          </span>

          <span>
            {item.points}
          </span>

        </div>

      ))}

    </section>
  );
}