import React from "react";
import ReactDOM from "react-dom";
import { FinsembleProvider } from "@finsemble/finsemble-ui/react/components/FinsembleProvider";
import "@finsemble/finsemble-ui/react/assets/css/finsemble.css";
import "../../../../public/assets/css/theme.css";
import Clock from "./Clock";
const ClockDialog = () => {
	return <>{<Clock/>}</>;
};

ReactDOM.render(
	<FinsembleProvider>
		<ClockDialog />
	</FinsembleProvider>,
	document.getElementById("ClockDialog-tsx")
);
