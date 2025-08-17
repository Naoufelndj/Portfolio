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
      "Elegant tropical hotel website with clean, aesthetic, calming visuals",
    modal: PalmoraModal,
  },
  {
    id: 3,
    image: Atélia,
    title: "Atélia - Interior Studio",
    description:
      "Interior design studio website with beautiful clean visuals and modern layout",
    modal: AtéliaModal,
  },

  {
    id: 4,
    image: VillaVista,
    title: "Villa Vista - Real Estate",
    description: "Modern villas for sale website with global luxury listings",
    modal: VillaVistaModal,
  },
  {
    id: 5,
    image: Verdeluxe,
    title: "Verdeluxe - Nature Retreat",
    description:
      "Beautiful nature retreat website with earthy tones and calm style",
    modal: VerdeluxeModal,
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
    image: Tripora,
    title: "Tripora - Travel Agency",
    description:
      "Modern travel agency website with clean layout and vibrant visuals",
    modal: TriporaModal,
  },
  {
    id: 8,
    image: LumaLiving,
    title: "Luma Living - Furniture Agency",
    description: "Minimal furniture website with soft colors and clean design",
    modal: LumaLivingModal,
  },
  {
    id: 9,
    image: LunoraStudio,
    title: "Lunora Studio - Photography",
    description:
      "Photography portfolio website with clean gallery-style layout",
    modal: LunoraStudioModal,
  },
  {
    id: 10,
    image: FocusPoint,
    title: "Focus Point - Photography Studio",
    description:
      "Photography studio website with bold visuals and modern aesthetic",
    modal: FocusPointModal,
  },
  {
    id: 11,
    image: TavolaFresca,
    title: "Tavola Fresca - Italian Restaurant",
    description:
      "Italian restaurant website with classic feel and modern layout",
    modal: TavolaFrescaModal,
  },
  {
    id: 12,
    image: Solvera,
    title: "Solvera - Mountain Resort",
    description:
      "Mountain resort website with autumn tones, scenic views, warm modern design",
    modal: SolveraModal,
  },
  {
    id: 13,
    image: Brewora,
    title: "Brewora - Coffee Shop",
    description: "Modern coffee shop website with cozy vibe and rich visuals",
    modal: BreworaModal,
  },
  {
    id: 14,
    image: ReveBlanc,
    title: "Rêve Blanc - Weddings",
    description:
      "Elegant weddings company website with soft colors and exclusive aesthetic",
    modal: ReveBlancModal,
  },
  {
    id: 15,
    image: Avenza,
    title: "Avenza - Furniture Company",
    description: "Stylish furniture website with warm tones and modern layout",
    modal: AvenzaModal,
  },
  {
    id: 16,
    image: EliteGetaways,
    title: "Elite Getaways - Travel Agency",
    description:
      "Luxury travel agency website with sleek design and soft colors",
    modal: EliteGetawaysModal,
  },
  {
    id: 17,
    image: StayEase,
    title: "Stay Ease - Hotel",
    description: "Wood-themed hotel website with warm textures and cozy design",
    modal: StayEaseModal,
  },
  {
    id: 18,
    image: Linea,
    title: "Linea - Tech Accessories eCommerce",
    description:
      "Modern eCommerce for tech accessories with clean UI and smooth shopping flow",
    modal: LineaModal,
  },
  {
    id: 19,
    image: AdventurePulse,
    title: "Adventure Pulse - Switzerland",
    description: "Adventure company website with bold visuals and alpine style",
    modal: AdventurePulseModal,
  },
  {
    id: 20,
    image: TheZéphyr,
    title: "The Zéphyr - Hotel ",
    description:
      "Luxury 5-star Algerian hotel website with elegant design, seamless experience",
    modal: TheZéphyrModal,
  },
  {
    id: 21,
    image: ApexTime,
    title: "Apex Time - Watches Store",
    description:
      "Clean e-commerce website for premium watches and timeless style",
    modal: ApexTimeModal,
  },
  {
    id: 22,
    image: Tranquara,
    title: "Tranquara - Spa & Wellness",
    description:
      "Serene spa and wellness website with soft visuals, calming tones, soft modern layout",
    modal: TranquaraModal,
  },
  {
    id: 23,
    image: AthLuxe,
    title: "AthLuxe - Luxury Gym",
    description:
      "High-end gym website with sleek design and premium fitness aesthetic",
    modal: AthLuxeModal,
  },
  {
    id: 24,
    image: LuxStay,
    title: "Lux Stay - Modern Hotel",
    description: "Modern hotel website with elegant layout and premium visuals",
    modal: LuxStayModal,
  },
  {
    id: 25,
    image: BazaTex,
    title: "Baza Tex - Haberdashery Shop",
    description:
      "Soft-toned Algerian haberdashery website, clean design and elegant product display",
    modal: BazaTexModal,
  },
  {
    id: 26,
    image: Setora,
    title: "Setora - Gaming Setups",
    description:
      "Dark, bold landing page for a gaming setup brand, tailored for performance and style",
    modal: SetoraModal,
  },
  {
    id: 27,
    image: FurLife,
    title: "Fur Life - Veterinarian",
    description:
      "Warm and caring vet clinic website with soft visuals and a trust-focused design",
    modal: FurLifeModal,
  },
  {
    id: 28,
    image: Opulence,
    title: "Opulence - Restaurant",
    description:
      "Fancy restaurant website with elegant design and luxurious feel",
    modal: OpulenceModal,
  },
  {
    id: 29,
    image: LuxeLooms,
    title: "Luxe Looms - Perfumes",
    description:
      "Elegant perfume store website with refined design and luxurious aesthetic",
    modal: LuxeLoomsModal,
  },
  {
    id: 30,
    image: PrimeSpaces,
    title: "Prime Spaces - Interior Design",
    description: "Modern design company website for homes, offices, and spaces",
    modal: PrimeSpacesModal,
  },
  {
    id: 31,
    image: GGStore,
    title: "GG Store - Gaming Gear",
    description:
      "Gaming store website for selling high-end setups and accessories",
    modal: GGStoreModal,
  },
  {
    id: 32,
    image: IronHive,
    title: "Iron Hive - Gym",
    description:
      "Powerful gym website with bold visuals and dark modern layout",
    modal: IronHiveModal,
  },
  {
    id: 33,
    image: DailyDrip,
    title: "Daily Drip - Coffee Shop",
    description: "Modern coffee shop website with cozy vibe and rich visuals",
    modal: DailyDripModal,
  },
  {
    id: 34,
    image: VelloraEstates,
    title: "Vellora Estates - Properties",
    description:
      "Real estate website for premium properties with elegant style",
    modal: VelloraEstatesModal,
  },
  {
    id: 35,
    image: SmileCare,
    title: "Smile Care - Dental Clinic",
    description:
      "Clean dental clinic website with soft colors, modern layout, aesthetic",
    modal: SmileCareModal,
  },
  {
    id: 36,
    image: Notel,
    title: "Notel - Hotel",
    description:
      "Nature-inspired hotel website with forest tones and clean layout",
    modal: NotelModal,
  },
  {
    id: 37,
    image: RentWheels,
    title: "Rent Wheels - Car Rental",
    description:
      "Algerian car rental website with sleek design and diverse vehicle selection",
    modal: RentWheelsModal,
  },
  {
    id: 38,
    image: FloraBelle,
    title: "Flora Belle - Flower Shop",
    description:
      "Charming flower shop website with soft colors and floral vibes",
    modal: FloraBelleModal,
  },
  {
    id: 39,
    image: NeatHaus,
    title: "Neat Haus - Furniture Store",
    description:
      "Furniture e-commerce website with clean layout and neutral tones",
    modal: NeatHausModal,
  },
  {
    id: 40,
    image: Monarch,
    title: "Monarch - Car Rental",
    description:
      "Car rental website with sleek layout and luxury vehicle showcase",
    modal: MonarchModal,
  },
  {
    id: 41,
    image: Luxetick,
    title: "Luxetick - Watches Store",
    description:
      "Premium watches e-commerce site with elegant modern interface",
    modal: LuxetickModal,
  },
  {
    id: 42,
    image: ChowChum,
    title: "ChowChum - Pet Food Store",
    description:
      "Pet food e-commerce website with playful design and soft colors",
    modal: ChowChumModal,
  },
  {
    id: 43,
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
