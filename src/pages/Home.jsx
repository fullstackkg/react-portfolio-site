import React from "react";
import Navbar from "../components/Navbar";
import PersonalCard from "../components/PersonalCard";
import PageLinkButtons from "../components/PageLinkButtons";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <PersonalCard />
      <PageLinkButtons />
      <div className="home-content">
        <div className="welcome-content">
          <h1 className="welcome-title">Welcome to my Portfolio!</h1>
          <p className="welcome-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam rem
            molestias sapiente, impedit obcaecati mollitia suscipit temporibus,
            repellat ut placeat ducimus animi quibusdam est saepe. Impedit
            molestiae ullam numquam eligendi expedita, fugiat beatae unde
            officiis minus suscipit iure dignissimos enim eaque quae fuga
            aliquid. Maxime amet blanditiis reiciendis eaque minus?
          </p>
        </div>
        <div className="mission-content">
          <h1 className="mission-statement-title">Mission Statement</h1>
          <p className="mission-statement-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perferendis sunt, beatae deleniti molestias voluptate itaque,
            aspernatur aliquam natus libero alias esse corrupti sit. Unde
            numquam laborum libero natus exercitationem dolor dolores qui
            consequatur, quia totam impedit id veniam culpa, quis possimus
            accusantium. Vero quas, veniam in voluptatem soluta delectus
            doloribus.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
