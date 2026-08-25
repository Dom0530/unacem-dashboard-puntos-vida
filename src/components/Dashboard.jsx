import Header from "./Header";
import Filters from "./Filters";
import RankingUser from "./RankingUser";
import RankingArea from "./RankingArea";
import WinnerCard from "./WinnerCard";
import LeadersList from "./LeadersList";
import ImpactList from "./ImpactList";
import FameWall from "./FameWall";

import { dashboardData } from "../data/dashboardData";

export default function Dashboard() {
  return (
    <main className="dashboard">

      <Header />

      <Filters />

      <section className="main-content">

        <div className="side-panel left-panel">

          <RankingUser
            data={dashboardData.userRanking}
          />

          <LeadersList
            data={dashboardData.leaders}
          />

          <FameWall
            title='"Muro de la Fama"'
            data={dashboardData.fameUsers}
            type="user"
          />

        </div>

        <div className="center-panel">

          <WinnerCard
            title="Participante Ganador del Mes Anterior"
            name={dashboardData.previousUserWinner.name}
            points={dashboardData.previousUserWinner.points}
          />

          <WinnerCard
            title="Área Ganadora del Mes Anterior"
            name={dashboardData.previousAreaWinner.name}
            points={dashboardData.previousAreaWinner.points}
          />

        </div>

        <div className="side-panel right-panel">

          <RankingArea
            data={dashboardData.areaRanking}
          />

          <ImpactList
            data={dashboardData.impact}
          />

          <FameWall
            title='"Muro de la Fama"'
            data={dashboardData.fameAreas}
            type="area"
          />

        </div>

      </section>

    </main>
  );
}