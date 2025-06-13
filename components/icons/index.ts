import { ChevronDown, UserRoundIcon, CircleX, MessageSquare, Plus } from "lucide-react";

const Icons = {
	arrowDown: ChevronDown,
	user: UserRoundIcon,
	message: MessageSquare,
	circleX: CircleX,
	add: Plus,
};

export type IconType = keyof typeof Icons;

export default Icons;
