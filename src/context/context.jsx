import { createContext } from "react";

import reactIcon from "../assets/icons/techs/react.webp";
import nextIcon from "../assets/icons/techs/next.webp";
import jsIcon from "../assets/icons/techs/js.webp";
import cssIcon from "../assets/icons/techs/css.webp";

import FlavorBite from "../assets/images/projects/Thumbnail/FlavorBite.webp";
import Palmora from "../assets/images/projects/Thumbnail/Palmora.webp";
import VillaVista from "../assets/images/projects/Thumbnail/VillaVista.webp";
import Verdeluxe from "../assets/images/projects/Thumbnail/Verdeluxe.webp";
import Tripora from "../assets/images/projects/Thumbnail/Tripora.webp";
import SakuraHeaven from "../assets/images/projects/Thumbnail/SakuraHeaven.webp";
import ApexTime from "../assets/images/projects/Thumbnail/ApexTime.webp";
import DailyDrip from "../assets/images/projects/Thumbnail/DailyDrip.webp";
import Avenza from "../assets/images/projects/Thumbnail/Avenza.webp";
import LumaLiving from "../assets/images/projects/Thumbnail/LumaLiving.webp";
import LuxStay from "../assets/images/projects/Thumbnail/LuxStay.webp";
import VelloraEstates from "../assets/images/projects/Thumbnail/VelloraEstates.webp";
import TavolaFresca from "../assets/images/projects/Thumbnail/TavolaFresca.webp";
import LunoraStudio from "../assets/images/projects/Thumbnail/LunoraStudio.webp";
import EliteGetaways from "../assets/images/projects/Thumbnail/EliteGetaways.webp";
import GGStore from "../assets/images/projects/Thumbnail/GGStore.webp";
import FloraBelle from "../assets/images/projects/Thumbnail/FloraBelle.webp";
import IronHive from "../assets/images/projects/Thumbnail/IronHive.webp";
import NeatHaus from "../assets/images/projects/Thumbnail/NeatHaus.webp";
import KyaningaLodge from "../assets/images/projects/Thumbnail/KyaningaLodge.webp";
import PrimeSpaces from "../assets/images/projects/Thumbnail/PrimeSpaces.webp";
import Luxetick from "../assets/images/projects/Thumbnail/LuxeTick.webp";
import ChowChum from "../assets/images/projects/Thumbnail/ChowChum.webp";
import PerfumeSpot from "../assets/images/projects/Thumbnail/PerfumeSpot.webp";
import LuxeLooms from "../assets/images/projects/Thumbnail/LuxeLooms.webp";
import Setora from "../assets/images/projects/Thumbnail/Setora.webp";
import AdventurePulse from "../assets/images/projects/Thumbnail/AdventurePulse.webp";
import Tranquara from "../assets/images/projects/Thumbnail/Tranquara.webp";
import BazaTex from "../assets/images/projects/Thumbnail/BazaTex.webp";
import SmileCare from "../assets/images/projects/Thumbnail/SmileCare.webp";
import FurLife from "../assets/images/projects/Thumbnail/FurLife.webp";
import Solvera from "../assets/images/projects/Thumbnail/Solvera.webp";
import Atélia from "../assets/images/projects/Thumbnail/Atélia.webp";
import Opulence from "../assets/images/projects/Thumbnail/Opulence.webp";
import Brewora from "../assets/images/projects/Thumbnail/Brewora.webp";
import ReveBlanc from "../assets/images/projects/Thumbnail/ReveBlanc.webp";
import FocusPoint from "../assets/images/projects/Thumbnail/FocusPoint.webp";
import AthLuxe from "../assets/images/projects/Thumbnail/AthLuxe.webp";
import Linea from "../assets/images/projects/Thumbnail/Linea.webp";
import TheZéphyr from "../assets/images/projects/Thumbnail/TheZéphyr.webp";
import LinguaNova from "../assets/images/projects/Thumbnail/LinguaNova.webp";
import Luméa from "../assets/images/projects/Thumbnail/Luméa.webp";
import Maravela from "../assets/images/projects/Thumbnail/Maravela.webp";
import LuneCéramique from "../assets/images/projects/Thumbnail/LuneCéramique.webp";
import Lustra from "../assets/images/projects/Thumbnail/Lustra.webp";
import DouxMatin from "../assets/images/projects/Thumbnail/DouxMatin.webp";
import Serein from "../assets/images/projects/Thumbnail/Serein.webp";

import FlavorBiteModal from "../assets/images/projects/Modal/FlavorBiteFull.webp";
import PalmoraModal from "../assets/images/projects/Modal/PalmoraFull.webp";
import VillaVistaModal from "../assets/images/projects/Modal/VillaVistaFull.webp";
import VerdeluxeModal from "../assets/images/projects/Modal/VerdeluxeFull.webp";
import TriporaModal from "../assets/images/projects/Modal/TriporaFull.webp";
import SakuraHeavenModal from "../assets/images/projects/Modal/SakuraHeavenFull.webp";
import ApexTimeModal from "../assets/images/projects/Modal/ApexTimeFull.webp";
import DailyDripModal from "../assets/images/projects/Modal/DailyDripFull.webp";
import AvenzaModal from "../assets/images/projects/Modal/AvenzaFull.webp";
import LumaLivingModal from "../assets/images/projects/Modal/LumaLivingFull.webp";
import LuxStayModal from "../assets/images/projects/Modal/LuxStayFull.webp";
import VelloraEstatesModal from "../assets/images/projects/Modal/VelloraEstatesFull.webp";
import TavolaFrescaModal from "../assets/images/projects/Modal/TavolaFrescaFull.webp";
import LunoraStudioModal from "../assets/images/projects/Modal/LunoraStudioFull.webp";
import EliteGetawaysModal from "../assets/images/projects/Modal/EliteGetawaysFull.webp";
import GGStoreModal from "../assets/images/projects/Modal/GGStoreFull.webp";
import FloraBelleModal from "../assets/images/projects/Modal/FloraBelleFull.webp";
import IronHiveModal from "../assets/images/projects/Modal/IronHiveFull.webp";
import NeatHausModal from "../assets/images/projects/Modal/NeatHausFull.webp";
import KyaningaLodgeModal from "../assets/images/projects/Modal/KyaningaLodgeFull.webp";
import PrimeSpacesModal from "../assets/images/projects/Modal/PrimeSpacesFull.webp";
import LuxetickModal from "../assets/images/projects/Modal/LuxeTickFull.webp";
import ChowChumModal from "../assets/images/projects/Modal/ChowChumFull.webp";
import PerfumeSpotModal from "../assets/images/projects/Modal/PerfumeSpotFull.webp";
import LuxeLoomsModal from "../assets/images/projects/Modal/LuxeLoomsFull.webp";
import SetoraModal from "../assets/images/projects/Modal/SetoraFull.webp";
import AdventurePulseModal from "../assets/images/projects/Modal/AdventurePulseFull.webp";
import TranquaraModal from "../assets/images/projects/Modal/TranquaraFull.webp";
import BazaTexModal from "../assets/images/projects/Modal/BazaTexFull.webp";
import SmileCareModal from "../assets/images/projects/Modal/SmileCareFull.webp";
import FurLifeModal from "../assets/images/projects/Modal/FurLifeFull.webp";
import SolveraModal from "../assets/images/projects/Modal/SolveraFull.webp";
import AtéliaModal from "../assets/images/projects/Modal/AtéliaFull.webp";
import OpulenceModal from "../assets/images/projects/Modal/OpulenceFull.webp";
import BreworaModal from "../assets/images/projects/Modal/BreworaFull.webp";
import ReveBlancModal from "../assets/images/projects/Modal/ReveBlancFull.webp";
import FocusPointModal from "../assets/images/projects/Modal/FocusPointFull.webp";
import AthLuxeModal from "../assets/images/projects/Modal/AthLuxeFull.webp";
import LineaModal from "../assets/images/projects/Modal/LineaFull.webp";
import TheZéphyrModal from "../assets/images/projects/Modal/TheZéphyrFull.webp";
import LinguaNovaModal from "../assets/images/projects/Modal/LinguaNovaFull.webp";
import LuméaModal from "../assets/images/projects/Modal/LuméaFull.webp";
import MaravelaModal from "../assets/images/projects/Modal/MaravelaFull.webp";
import LuneCéramiqueModal from "../assets/images/projects/Modal/LuneCéramiqueFull.webp";
import LustraModal from "../assets/images/projects/Modal/LustraFull.webp";
import DouxMatinModal from "../assets/images/projects/Modal/DouxMatinFull.webp";
import SereinModal from "../assets/images/projects/Modal/SereinFull.webp";

// eslint-disable-next-line react-refresh/only-export-components
export const appContext = createContext();

const projects = [
  {
    id: 1,
    image: Palmora,
    title: "Palmora - Hotel",
    modal: PalmoraModal,
    techs: [reactIcon, jsIcon, cssIcon],
  },
  {
    id: 2,
    image: Atélia,
    title: "Atélia - Interior Studio",
    modal: AtéliaModal,
    techs: [reactIcon, jsIcon, cssIcon],
  },
  {
    id: 3,
    image: FlavorBite,
    title: "Flavor Bite - Restaurant",
    modal: FlavorBiteModal,
    techs: [reactIcon, jsIcon, cssIcon],
  },
  {
    id: 4,
    image: Linea,
    title: "Linea - Tech Accessories eCommerce",
    modal: LineaModal,
    techs: [reactIcon, jsIcon, cssIcon],
  },
  {
    id: 5,
    image: LumaLiving,
    title: "Luma Living - Furniture Agency",
    modal: LumaLivingModal,
    techs: [reactIcon, jsIcon, cssIcon],
  },
  {
    id: 6,
    image: Solvera,
    title: "Solvera - Mountain Resort",
    modal: SolveraModal,
    techs: [reactIcon, jsIcon, cssIcon],
  },
  {
    id: 7,
    image: Luméa,
    title: "Luméa - Private Island Resort",
    modal: LuméaModal,
    techs: [nextIcon, jsIcon, cssIcon],
  },
  {
    id: 8,
    image: FocusPoint,
    title: "Focus Point - Photography Studio",
    modal: FocusPointModal,
    techs: [reactIcon, jsIcon, cssIcon],
  },
  {
    id: 9,
    image: FloraBelle,
    title: "Flora Belle - Flower Shop",
    modal: FloraBelleModal,
    techs: [reactIcon, jsIcon, cssIcon],
  },
  {
    id: 10,
    image: Luxetick,
    title: "Luxetick - Watches Store",
    modal: LuxetickModal,
    techs: [reactIcon, jsIcon, cssIcon],
  },
  {
    id: 11,
    image: Tripora,
    title: "Tripora - Travel Agency",
    modal: TriporaModal,
    techs: [reactIcon, jsIcon, cssIcon],
  },
  {
    id: 12,
    image: LunoraStudio,
    title: "Lunora Studio - Photography",
    modal: LunoraStudioModal,
    techs: [reactIcon, jsIcon, cssIcon],
  },
  {
    id: 13,
    image: TavolaFresca,
    title: "Tavola Fresca - Italian Restaurant",
    modal: TavolaFrescaModal,
    techs: [reactIcon, jsIcon, cssIcon],
  },
  {
    id: 14,
    image: Brewora,
    title: "Brewora - Coffee Shop",
    modal: BreworaModal,
    techs: [reactIcon, jsIcon, cssIcon],
  },
  {
    id: 15,
    image: ReveBlanc,
    title: "Rêve Blanc - Weddings",
    modal: ReveBlancModal,
    techs: [reactIcon, jsIcon, cssIcon],
  },
  {
    id: 16,
    image: LinguaNova,
    title: "Lingua Nova - Languages School",
    modal: LinguaNovaModal,
    techs: [nextIcon, jsIcon, cssIcon],
  },
  {
    id: 17,
    image: Maravela,
    title: "Maravela - Yachts Rental",
    modal: MaravelaModal,
    techs: [nextIcon, jsIcon, cssIcon],
  },
  {
    id: 18,
    image: DouxMatin,
    title: "Doux Matin - Bakery & Pastry",
    modal: DouxMatinModal,
    techs: [nextIcon, jsIcon, cssIcon],
  },
  {
    id: 19,
    image: LuneCéramique,
    title: "Lune Céramique - Ceramics Studio",
    modal: LuneCéramiqueModal,
    techs: [nextIcon, jsIcon, cssIcon],
  },
  {
    id: 20,
    image: NeatHaus,
    title: "Neat Haus - Furniture Store",
    modal: NeatHausModal,
    techs: [reactIcon, jsIcon, cssIcon],
  },
  {
    id: 21,
    image: PerfumeSpot,
    title: "Perfume Spot - Fragrance Store",
    modal: PerfumeSpotModal,
    techs: [reactIcon, jsIcon, cssIcon],
  },
  {
    id: 22,
    image: Avenza,
    title: "Avenza - Furniture Company",
    modal: AvenzaModal,
    techs: [reactIcon, jsIcon, cssIcon],
  },
  {
    id: 23,
    image: EliteGetaways,
    title: "Elite Getaways - Travel Agency",
    modal: EliteGetawaysModal,
    techs: [reactIcon, jsIcon, cssIcon],
  },
  {
    id: 24,
    image: Serein,
    title: "Serein & Co. - Tea House",
    modal: SereinModal,
    techs: [reactIcon, jsIcon, cssIcon],
  },
  {
    id: 25,
    image: SakuraHeaven,
    title: "Sakura Heaven - Hotel & Spa",
    modal: SakuraHeavenModal,
    techs: [reactIcon, jsIcon, cssIcon],
  },
  {
    id: 26,
    image: AdventurePulse,
    title: "Adventure Pulse - Switzerland",
    modal: AdventurePulseModal,
    techs: [reactIcon, jsIcon, cssIcon],
  },
  {
    id: 27,
    image: TheZéphyr,
    title: "The Zéphyr - Hotel ",
    modal: TheZéphyrModal,
    techs: [reactIcon, jsIcon, cssIcon],
  },
  {
    id: 28,
    image: Lustra,
    title: "Lustra - Fine Restaurant",
    modal: LustraModal,
    techs: [reactIcon, jsIcon, cssIcon],
  },
  {
    id: 29,
    image: Verdeluxe,
    title: "Verdeluxe - Nature Retreat",
    modal: VerdeluxeModal,
    techs: [reactIcon, jsIcon, cssIcon],
  },
  {
    id: 30,
    image: ApexTime,
    title: "Apex Time - Watches Store",
    modal: ApexTimeModal,
    techs: [reactIcon, jsIcon, cssIcon],
  },
  {
    id: 31,
    image: Tranquara,
    title: "Tranquara - Spa & Wellness",
    modal: TranquaraModal,
    techs: [reactIcon, jsIcon, cssIcon],
  },
  {
    id: 32,
    image: AthLuxe,
    title: "AthLuxe - Luxury Gym",
    modal: AthLuxeModal,
    techs: [reactIcon, jsIcon, cssIcon],
  },
  {
    id: 33,
    image: LuxStay,
    title: "Lux Stay - Modern Hotel",
    modal: LuxStayModal,
    techs: [reactIcon, jsIcon, cssIcon],
  },
  {
    id: 34,
    image: BazaTex,
    title: "Baza Tex - Haberdashery Shop",
    modal: BazaTexModal,
    techs: [reactIcon, jsIcon, cssIcon],
  },
  {
    id: 35,
    image: Setora,
    title: "Setora - Gaming Setups",
    modal: SetoraModal,
    techs: [reactIcon, jsIcon, cssIcon],
  },
  {
    id: 36,
    image: FurLife,
    title: "Fur Life - Veterinarian",
    modal: FurLifeModal,
    techs: [reactIcon, jsIcon, cssIcon],
  },
  {
    id: 37,
    image: Opulence,
    title: "Opulence - Restaurant",
    modal: OpulenceModal,
    techs: [reactIcon, jsIcon, cssIcon],
  },
  {
    id: 38,
    image: LuxeLooms,
    title: "Luxe Looms - Perfumes",
    modal: LuxeLoomsModal,
    techs: [reactIcon, jsIcon, cssIcon],
  },
  {
    id: 39,
    image: PrimeSpaces,
    title: "Prime Spaces - Interior Design",
    modal: PrimeSpacesModal,
    techs: [reactIcon, jsIcon, cssIcon],
  },
  {
    id: 40,
    image: GGStore,
    title: "GG Store - Gaming Gear",
    modal: GGStoreModal,
    techs: [reactIcon, jsIcon, cssIcon],
  },
  {
    id: 41,
    image: IronHive,
    title: "Iron Hive - Gym",
    modal: IronHiveModal,
    techs: [reactIcon, jsIcon, cssIcon],
  },
  {
    id: 42,
    image: ChowChum,
    title: "ChowChum - Pet Food Store",
    modal: ChowChumModal,
    techs: [reactIcon, jsIcon, cssIcon],
  },
  {
    id: 43,
    image: VillaVista,
    title: "Villa Vista - Real Estate",
    modal: VillaVistaModal,
    techs: [reactIcon, jsIcon, cssIcon],
  },
  {
    id: 44,
    image: DailyDrip,
    title: "Daily Drip - Coffee Shop",
    modal: DailyDripModal,
    techs: [reactIcon, jsIcon, cssIcon],
  },
  {
    id: 45,
    image: VelloraEstates,
    title: "Vellora Estates - Properties",
    modal: VelloraEstatesModal,
    techs: [reactIcon, jsIcon, cssIcon],
  },
  {
    id: 46,
    image: SmileCare,
    title: "Smile Care - Dental Clinic",
    modal: SmileCareModal,
    techs: [reactIcon, jsIcon, cssIcon],
  },
  {
    id: 47,
    image: KyaningaLodge,
    title: "Kyaninga Lodge - Hotel",
    modal: KyaningaLodgeModal,
    techs: [reactIcon, jsIcon, cssIcon],
  },
];

export default function ContextProvider({ children }) {
  return (
    <appContext.Provider value={{ projects }}>{children}</appContext.Provider>
  );
}
