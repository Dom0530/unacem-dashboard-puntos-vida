export default function LeadersList({ data }) {

  return (
    <section className="leaders">

      <h3>
        Líderes en Acción – Desde el 4° Lugar
      </h3>

      {data.map((person) => (
        <div className="leader-row" key={person.name}>

          <span>
            {person.name}
          </span>

          <strong>
            {person.points}
          </strong>

        </div>
      ))}

    </section>
  );
}