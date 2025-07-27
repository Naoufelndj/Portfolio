import { createContext } from "react";

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
import StayEase from "../assets/images/projects/Thumbnail/StayEase.webp";
import FloraBelle from "../assets/images/projects/Thumbnail/FloraBelle.webp";
import IronHive from "../assets/images/projects/Thumbnail/IronHive.webp";
import NeatHaus from "../assets/images/projects/Thumbnail/NeatHaus.webp";
import Notel from "../assets/images/projects/Thumbnail/Notel.webp";
import PrimeSpaces from "../assets/images/projects/Thumbnail/PrimeSpaces.webp";
import Monarch from "../assets/images/projects/Thumbnail/Monarch.webp";
import Luxetick from "../assets/images/projects/Thumbnail/LuxeTick.webp";
import ChowChum from "../assets/images/projects/Thumbnail/ChowChum.webp";
import PerfumeSpot from "../assets/images/projects/Thumbnail/PerfumeSpot.webp";
import RentWheels from "../assets/images/projects/Thumbnail/RentWheels.webp";
import LuxeLooms from "../assets/images/projects/Thumbnail/LuxeLooms.webp";
import Setora from "../assets/images/projects/Thumbnail/Setora.webp";
import AdventurePulse from "../assets/images/projects/Thumbnail/AdventurePulse.webp";

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
import StayEaseModal from "../assets/images/projects/Modal/StayEaseFull.webp";
import FloraBelleModal from "../assets/images/projects/Modal/FloraBelleFull.webp";
import IronHiveModal from "../assets/images/projects/Modal/IronHiveFull.webp";
import NeatHausModal from "../assets/images/projects/Modal/NeatHausFull.webp";
import NotelModal from "../assets/images/projects/Modal/NotelFull.webp";
import PrimeSpacesModal from "../assets/images/projects/Modal/PrimeSpacesFull.webp";
import MonarchModal from "../assets/images/projects/Modal/MonarchFull.webp";
import LuxetickModal from "../assets/images/projects/Modal/LuxeTickFull.webp";
import ChowChumModal from "../assets/images/projects/Modal/ChowChumFull.webp";
import PerfumeSpotModal from "../assets/images/projects/Modal/PerfumeSpotFull.webp";
import RentWheelsModal from "../assets/images/projects/Modal/RentWheelsFull.webp";
import LuxeLoomsModal from "../assets/images/projects/Modal/LuxeLoomsFull.webp";
import SetoraModal from "../assets/images/projects/Modal/SetoraFull.webp";
import AdventurePulseModal from "../assets/images/projects/Modal/AdventurePulseFull.webp";

// eslint-disable-next-line react-refresh/only-export-components
export const appContext = createContext();

const projects = [
  {
    id: 1,
    image: FlavorBite,
    title: "Flavor Bite - Restaurant",
    description:
      "Luxury restaurant website with elegant design and modern layout",
    modal: FlavorBiteModal,
  },
  {
    id: 2,
    image: Palmora,
    title: "Palmora - Hotel",
    description:
      "Elegant tropical hotel website with clean and calming visuals",
    modal: PalmoraModal,
  },
  {
    id: 3,
    image: VillaVista,
    title: "Villa Vista - Real Estate",
    description: "Modern villas for sale website with global luxury listings",
    modal: VillaVistaModal,
  },
  {
    id: 4,
    image: Verdeluxe,
    title: "Verdeluxe - Nature Retreat",
    description:
      "Beautiful nature retreat website with earthy tones and calm style",
    modal: VerdeluxeModal,
  },
  {
    id: 5,
    image: Tripora,
    title: "Tripora - Travel Agency",
    description:
      "Modern travel agency website with clean layout and vibrant visuals",
    modal: TriporaModal,
  },
  {
    id: 6,
    image: SakuraHeaven,
    title: "Sakura Heaven - Hotel & Spa",
    description:
      "Japanese-themed hotel and spa website with soft serene visuals",
    modal: SakuraHeavenModal,
  },
  {
    id: 7,
    image: LumaLiving,
    title: "Luma Living - Furniture Agency",
    description: "Minimal furniture website with soft colors and clean design",
    modal: LumaLivingModal,
  },
  {
    id: 8,
    image: LunoraStudio,
    title: "Lunora Studio - Photography",
    description:
      "Photography portfolio website with clean gallery-style layout",
    modal: LunoraStudioModal,
  },
  {
    id: 9,
    image: Avenza,
    title: "Avenza - Furniture Company",
    description: "Stylish furniture website with warm tones and modern layout",
    modal: AvenzaModal,
  },
  {
    id: 10,
    image: TavolaFresca,
    title: "Tavola Fresca - Italian Restaurant",
    description:
      "Italian restaurant website with classic feel and modern layout",
    modal: TavolaFrescaModal,
  },
  {
    id: 11,
    image: StayEase,
    title: "Stay Ease - Hotel",
    description: "Wood-themed hotel website with warm textures and cozy design",
    modal: StayEaseModal,
  },
  {
    id: 12,
    image: EliteGetaways,
    title: "Elite Getaways - Travel Agency",
    description:
      "Luxury travel agency website with sleek design and soft colors",
    modal: EliteGetawaysModal,
  },
  {
    id: 13,
    image: ApexTime,
    title: "Apex Time - Watches Store",
    description:
      "Clean e-commerce website for premium watches and timeless style",
    modal: ApexTimeModal,
  },
  {
    id: 14,
    image: DailyDrip,
    title: "Daily Drip - Coffee Shop",
    description: "Modern coffee shop website with cozy vibe and rich visuals",
    modal: DailyDripModal,
  },
  {
    id: 15,
    image: AdventurePulse,
    title: "Adventure Pulse - Switzerland",
    description: "Adventure company website with bold visuals and alpine style",
    modal: AdventurePulseModal,
  },
  {
    id: 16,
    image: LuxStay,
    title: "Lux Stay - Modern Hotel",
    description: "Modern hotel website with elegant layout and premium visuals",
    modal: LuxStayModal,
  },
  {
    id: 17,
    image: Setora,
    title: "Setora - Gaming Setups",
    description:
      "Dark, bold landing page for a gaming setup brand, tailored for performance and style",
    modal: SetoraModal,
  },
  {
    id: 18,
    image: LuxeLooms,
    title: "Luxe Looms - Perfumes",
    description:
      "Elegant perfume store website with refined design and luxurious aesthetic",
    modal: LuxeLoomsModal,
  },
  {
    id: 19,
    image: PrimeSpaces,
    title: "Prime Spaces - Interior Design",
    description: "Modern design company website for homes, offices, and spaces",
    modal: PrimeSpacesModal,
  },
  {
    id: 20,
    image: GGStore,
    title: "GG Store - Gaming Gear",
    description:
      "Gaming store website for selling high-end setups and accessories",
    modal: GGStoreModal,
  },
  {
    id: 21,
    image: IronHive,
    title: "Iron Hive - Gym",
    description:
      "Powerful gym website with bold visuals and dark modern layout",
    modal: IronHiveModal,
  },
  {
    id: 22,
    image: VelloraEstates,
    title: "Vellora Estates - Properties",
    description:
      "Real estate website for premium properties with elegant style",
    modal: VelloraEstatesModal,
  },
  {
    id: 23,
    image: Notel,
    title: "Notel - Hotel",
    description:
      "Nature-inspired hotel website with forest tones and clean layout",
    modal: NotelModal,
  },
  {
    id: 24,
    image: RentWheels,
    title: "Rent Wheels - Car Rental",
    description:
      "Algerian car rental website with sleek design and diverse vehicle selection",
    modal: RentWheelsModal,
  },
  {
    id: 25,
    image: FloraBelle,
    title: "Flora Belle - Flower Shop",
    description:
      "Charming flower shop website with soft colors and floral vibes",
    modal: FloraBelleModal,
  },
  {
    id: 26,
    image: NeatHaus,
    title: "Neat Haus - Furniture Store",
    description:
      "Furniture e-commerce website with clean layout and neutral tones",
    modal: NeatHausModal,
  },
  {
    id: 27,
    image: Monarch,
    title: "Monarch - Car Rental",
    description:
      "Car rental website with sleek layout and luxury vehicle showcase",
    modal: MonarchModal,
  },
  {
    id: 28,
    image: Luxetick,
    title: "Luxetick - Watches Store",
    description:
      "Premium watches e-commerce site with elegant modern interface",
    modal: LuxetickModal,
  },
  {
    id: 29,
    image: ChowChum,
    title: "ChowChum - Pet Food Store",
    description:
      "Pet food e-commerce website with playful design and soft colors",
    modal: ChowChumModal,
  },
  {
    id: 30,
    image: PerfumeSpot,
    title: "Perfume Spot - Fragrance Store",
    description:
      "Elegant perfume store website with soft visuals and modern layout",
    modal: PerfumeSpotModal,
  },
];

export default function ContextProvider({ children }) {
  return (
    <appContext.Provider value={{ projects }}>{children}</appContext.Provider>
  );
}
