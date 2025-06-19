import {
	Calendar,
	ChevronDown,
	CircleX,
	Info,
	MessageSquare,
	MoreHorizontal,
	Plus,
	UserRoundIcon,
} from "lucide-react";
import { TemplateIcon, UserOutlineIcon } from "../layout/app-icons";

const Icons = {
	arrowDown: ChevronDown,
	user: UserRoundIcon,
	message: MessageSquare,
	circleX: CircleX,
	add: Plus,
	TemplateIcon,
	UserOutlineIcon,
	Info,
	Calendar,
	MoreHorizontal,
};

export type IconType = keyof typeof Icons;

export default Icons;
