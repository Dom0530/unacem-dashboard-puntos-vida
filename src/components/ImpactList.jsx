export default function ImpactList({ data }) {

  return (
    <section className="leaders">

      <h3>
        Áreas con Mayor Impacto – Desde el 4° Lugar
      </h3>

      {data.map((area) => (
        <div className="leader-row" key={area.name}>

          <span>
            {area.name}
          </span>

          <strong>
            {area.points}
          </strong>

        </div>
      ))}

    </section>
  );
}