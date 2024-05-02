/* eslint-disable no-unused-vars */
import Dashboard from "../../assets/sidebar-icons/Dashboard.svg";
import Catalogue from "../../assets/sidebar-icons/Catalogue.svg";
import Client from "../../assets/sidebar-icons/Client.svg";
import Demande from "../../assets/sidebar-icons/Demande.svg";
import Link from "../../assets/sidebar-icons/Link.svg";
import Messagerie from "../../assets/sidebar-icons/Messagerie.svg";
import Prospect from "../../assets/sidebar-icons/Prospect.svg";
import Schedule from "../../assets/sidebar-icons/Schedule.svg";
import Statistique from "../../assets/sidebar-icons/Statistique.svg";
import Stock from "../../assets/sidebar-icons/Stock.svg";
import Suivi from "../../assets/sidebar-icons/Suivi.svg";
import ToolBox from "../../assets/sidebar-icons/ToolBox.svg";
import Vente from "../../assets/sidebar-icons/Vente.svg";
import Delai from "../../assets/sidebar-icons/Delay.svg";
import Pipe from "../../assets/sidebar-icons/Pipe.svg";

export const sideBarTop = [
  {
    name: "Tableau de Bord",
    image: Dashboard,
    path: "/dashboard",
    // roles : ["Commercial"] Implémenter une liste de rôle
    // {if role of roles}
  },
  {
    name: "Client",
    image: Client,
    path: "/customer",
  },
  {
    name: "Prospect",
    image: Prospect,
    path: "/prospect",
  },
  {
    name: "Vente",
    image: Vente,
    path: "/sales",
  },
  {
    name: "Retard",
    image: Delai,
    path: "/late",
  },

  {
    name: "Catalogue",
    image: Catalogue,
    path: "/catalog",
  },
  {
    name: "Stock",
    image: Stock,
    path: "/supply",
  },
  {
    name: "Suivi des achats",
    image: Suivi,
    path: "/purchase-tracking",
  },
  {
    name: "Suivi des commandes",
    image: Suivi,
    path: "/order-tracking",
  },
  {
    name: "Suivi des livraisons",
    image: Suivi,
    path: "/delivery-tracking",
  },
  {
    name: "Suivi des ventes",
    image: Suivi,
    path: "/sales-tracking",
  },
  {
    name: "Demande",
    image: Demande,
    path: "/request",
  },
  {
    name: "Statistiques",
    image: Statistique,
    path: "/statistics",
  },
];

export const sideBarBottom = [
  {
    name: "Pipe",
    image: Pipe,
    path: "/pipe",
  },
  {
    name: "Calendrier",
    image: Schedule,
    path: "/calendar",
  },
  {
    name: "Messagerie",
    image: Messagerie,
    path: "/messenger",
  },
  {
    name: "Boite à outils",
    image: ToolBox,
    path: "/toolbox",
  },
  {
    name: "AgoraStore",
    image: Link,
    path: "",
  },
  {
    name: "Pneudex",
    image: Link,
    path: "",
  },
];
