import React from "react";
import { IonIcon } from "@ionic/react";
import {
  homeOutline,
  flameOutline,
  codeSlashOutline,
  logoJavascript,
  logoReact,
  musicalNotesOutline,
  schoolOutline,
  discOutline,
  filmOutline,
  gameControllerOutline,
  pulseOutline,
  footballOutline,
  sparklesOutline,
  diamondOutline,
} from "ionicons/icons";

const Categories = () => {
  const icons = [
    { icon: homeOutline, name: "Home" },
    { icon: flameOutline, name: "Trending" },
    { icon: codeSlashOutline, name: "Coding" },
    { icon: logoJavascript, name: "Javascript" },
    { icon: logoReact, name: "ReactJS" },
    { icon: musicalNotesOutline, name: "Music" },
    { icon: schoolOutline, name: "Education" },
    { icon: discOutline, name: "Podcast" },
    { icon: filmOutline, name: "Movie" },
    { icon: gameControllerOutline, name: "Gaming" },
    { icon: pulseOutline, name: "Live" },
    { icon: footballOutline, name: "Sport" },
    { icon: sparklesOutline, name: "Fashion" },
    { icon: diamondOutline, name: "Beauty" },
  ];

  return (
    <aside className="pt-12 border w-[10%]">
      {icons.map((icon, index) => (
        <button key={index}>
          <IonIcon icon={icon.icon}></IonIcon>
          <p>{icon.name}</p>
        </button>
      ))}
    </aside>
  );
};

export default Categories;
