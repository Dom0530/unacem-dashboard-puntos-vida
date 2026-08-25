export default function Filters() {
  return (
    <div className="filters">

      <div className="filter">
        <label>Año</label>

        <select defaultValue="2026">
          <option>2026</option>
          <option>2025</option>
        </select>
      </div>

      <div className="filter">
        <label>Mes</label>

        <select defaultValue="Agosto">
          <option>Agosto</option>
          <option>Julio</option>
          <option>Junio</option>
        </select>
      </div>

      <div className="filter">
        <label>Sede</label>

        <select defaultValue="LIMA">
          <option>LIMA</option>
          <option>ATOCONGO</option>
        </select>
      </div>

    </div>
  );
}