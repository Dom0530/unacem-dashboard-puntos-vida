export default function Header() {
  return (
    <header className="dashboard-header">

      <div className="brand">
        <div className="brand-icon">
          U
        </div>

        <span>UNACEM</span>
      </div>

      <div className="dashboard-title">
        SISTEMA DE RECONOCIMIENTO POR PUNTOS VIDA
      </div>

      <div className="last-update">
        Última Actualización:<br />
        <strong>13/08/2026 12:31 AM</strong>
      </div>

      <button className="how-button">
        Como Ganar Puntos
      </button>

    </header>
  );
}