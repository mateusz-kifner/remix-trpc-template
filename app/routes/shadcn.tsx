import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
// import { IconLoader2 } from "@tabler/icons-react";
import { type ComponentType, useId } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeToggle } from "@/components/ui/theme";
// import type { GetStaticProps } from "next";
// import { ThemeToggle } from "@/components/ui/theme";

import TestAccordion from "@/test-components/shadcn/test-accordion";
import TestAlert from "@/test-components/shadcn/test-alert";
import TestAlertDialog from "@/test-components/shadcn/test-alert-dialog";
import TestAspectRatio from "@/test-components/shadcn/test-aspect-ratio";
import TestBadge from "@/test-components/shadcn/test-badge";
import TestBreadcrumb from "@/test-components/shadcn/test-breadcrumb";
import TestButton from "@/test-components/shadcn/test-button";
import TestCalendar from "@/test-components/shadcn/test-calendar";

import TestCard from "@/test-components/shadcn/test-card";
import TestCarousel from "@/test-components/shadcn/test-carousel";
import TestChart from "@/test-components/shadcn/test-chart";
import TestCheckbox from "@/test-components/shadcn/test-checkbox";
import TestCollapsible from "@/test-components/shadcn/test-collapsible";
import TestCombobox from "@/test-components/shadcn/test-combobox";
import TestCommand from "@/test-components/shadcn/test-command";
import TestContextMenu from "@/test-components/shadcn/test-context-menu";
import TestDialog from "@/test-components/shadcn/test-dialog";
import TestDrawer from "@/test-components/shadcn/test-drawer";
import TestDropdownMenu from "@/test-components/shadcn/test-dropdown-menu";
import TestForm from "@/test-components/shadcn/test-form";
import TestHoverCard from "@/test-components/shadcn/test-hover-card";
import TestInputOTP from "@/test-components/shadcn/test-input-otp";
import TestInput from "@/test-components/shadcn/test-input";
import TestLabel from "@/test-components/shadcn/test-label";
import TestMenubar from "@/test-components/shadcn/test-menubar";
import TestNavigationMenu from "@/test-components/shadcn/test-navigation-menu";
import TestPagination from "@/test-components/shadcn/test-pagination";
import TestPaginationPrimitive from "@/test-components/shadcn/test-pagination-primitive";
import TestPopover from "@/test-components/shadcn/test-popover";
import TestProgress from "@/test-components/shadcn/test-progress";
import TestRatioGroup from "@/test-components/shadcn/test-ratio-group";
import TestResizable from "@/test-components/shadcn/test-resizable";
import TestScrollArea from "@/test-components/shadcn/test-scroll-area";
import TestSelect from "@/test-components/shadcn/test-select";
import TestSeparator from "@/test-components/shadcn/test-separator";
import TestSheet from "@/test-components/shadcn/test-sheet";
import TestSkeleton from "@/test-components/shadcn/test-skeleton";
import TestSlider from "@/test-components/shadcn/test-slider";
import TestSonner from "@/test-components/shadcn/test-sonner";
import TestSwitch from "@/test-components/shadcn/test-switch";
import TestTable from "@/test-components/shadcn/test-table";
import TestTabs from "@/test-components/shadcn/test-tabs";
import TestTextarea from "@/test-components/shadcn/test-textarea";
import TestToggle from "@/test-components/shadcn/test-toggle";
import TestTooltip from "@/test-components/shadcn/test-tooltip";
import { Toaster } from "sonner";

const UIElements: {
	title: string;
	description?: string;
	Element: ComponentType;
	className?: string;
}[] = [
	{
		title: "Accordion",
		Element: TestAccordion,
	},
	{
		title: "Alert",
		Element: TestAlert,
		className: "flex-col",
	},
	{
		title: "AlertDialog",
		Element: TestAlertDialog,
	},
	{
		title: "AspectRatio",
		description: "16 / 9",
		Element: TestAspectRatio,
	},
	{
		title: "Badge",
		Element: TestBadge,
	},
	{
		title: "Breadcrumb",
		Element: TestBreadcrumb,
	},
	{
		title: "Button",
		Element: TestButton,
		className: "flex-col",
	},
	{
		title: "Calendar",
		Element: TestCalendar,
	},
	{
		title: "Card",
		Element: TestCard,
	},
	{
		title: "Carousel",
		Element: TestCarousel,
		className: "justify-center",
	},
	{
		title: "Chart",
		Element: TestChart,
	},
	{
		title: "Checkbox",
		Element: TestCheckbox,
		className: "flex-col",
	},
	{
		title: "Collapsible",
		Element: TestCollapsible,
		className: "flex-col",
	},
	{
		title: "Combobox",
		Element: TestCombobox,
	},
	{
		title: "Command",
		Element: TestCommand,
	},
	{
		title: "ContextMenu",
		Element: TestContextMenu,
	},
	{
		title: "Dialog",
		Element: TestDialog,
	},
	{
		title: "Drawer",
		Element: TestDrawer,
	},
	{
		title: "DropdownMenu",
		Element: TestDropdownMenu,
		className: "justify-center",
	},

	{
		title: "Form",
		Element: TestForm,
	},
	{
		title: "HoverCard",
		Element: TestHoverCard,
		className: "justify-center",
	},
	{
		title: "InputOTP",
		Element: TestInputOTP,
		className: "flex-col",
	},
	{
		title: "Input",
		Element: TestInput,
		className: "flex-col",
	},
	{
		title: "Label",
		Element: TestLabel,
		className: "flex-col",
	},
	{
		title: "Menubar",
		Element: TestMenubar,
	},
	{
		title: "NavigationMenu",
		Element: TestNavigationMenu,
	},
	{
		title: "Pagination",
		Element: TestPagination,
		className: "flex-col",
	},
	{
		title: "Pagination Primitive",
		Element: TestPaginationPrimitive,
		className: "flex-col",
	},
	{
		title: "Popover",
		Element: TestPopover,
	},
	{
		title: "Progress",
		Element: TestProgress,
	},
	{
		title: "RatioGroup",
		Element: TestRatioGroup,
	},
	{
		title: "Resizable",
		Element: TestResizable,
	},
	{
		title: "ScrollArea",
		Element: TestScrollArea,
	},
	{
		title: "Select",
		Element: TestSelect,
		className: "flex-col",
	},
	{
		title: "Separator",
		Element: TestSeparator,
	},
	{
		title: "Sheet",
		Element: TestSheet,
	},
	{
		title: "Skeleton",
		Element: TestSkeleton,
		className: "flex-col",
	},
	{
		title: "Slider",
		Element: TestSlider,
		className: "flex-col gap-7 pb-7",
	},
	{
		title: "Sonner",
		Element: TestSonner,
	},
	{
		title: "Switch",
		Element: TestSwitch,
	},
	{
		title: "Table",
		Element: TestTable,
	},
	{
		title: "Tabs",
		Element: TestTabs,
		className: "justify-center",
	},
	{
		title: "TextArea",
		Element: TestTextarea,
		className: "flex-col",
	},
	{
		title: "Toggle",
		Element: TestToggle,
		className: "flex-col",
	},
	{
		title: "Tooltip",
		Element: TestTooltip,
		className: "flex-col",
	},
];

function ShadCN() {
	// const { toggleTheme, theme } = useUserContext();
	const uuid = useId();

	return (
		<div className="mx-auto flex max-w-screen-xl flex-col gap-4 p-2 pb-96">
			<TooltipProvider>
				<ThemeToggle />
				{UIElements.map((val, index: number) => (
					<Card
						key={`${uuid}${
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							index
						}:`}
					>
						<CardHeader>
							<CardTitle>{val.title}</CardTitle>
							{val.description !== undefined && (
								<CardDescription>{val.description}</CardDescription>
							)}
						</CardHeader>
						<CardContent className={cn("flex gap-2 p-2", val.className)}>
							<val.Element />
						</CardContent>
					</Card>
				))}
				<Toaster />
			</TooltipProvider>
		</div>
	);
}

export default ShadCN;
