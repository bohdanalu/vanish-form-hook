import TelegramIcon from "./Components/Footer/Social/SocialIcons/TelegramIcon";
import TwitterIcon from "./Components/Footer/Social/SocialIcons/TwitterIcon";
import FrameIcon from "./Components/Footer/Social/SocialIcons/FrameIcon";

export const RECEPIENT_WALLET_ADDRESS_MAX_LENGTH = 100;
export const RECEPIENT_WALLET_ADDRESS_MIN_LENGTH = 5;

export const socialIcons = [
  { id: "Twitter", title: "Twitter", icon: <TwitterIcon /> },
  { id: "Telegram", title: "Telegram", icon: <TelegramIcon /> },
  { id: "Frame", title: "Frame", icon: <FrameIcon /> },
];

export const percentages = [25, 50, 75, 100];

export const currencies = [
  { code: "ETH", name: "Ethereum", img: "/images/icons/Ethereum.png" },
  { code: "BTC", name: "Bitcoin", img: "/images/icons/Ethereum.png" },
  { code: "HEX", name: "Hex", img: "/images/icons/Ethereum.png" },
];
