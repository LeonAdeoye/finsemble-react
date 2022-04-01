import React from "react";
import ReactDOM from "react-dom";
import { FinsembleProvider } from "@finsemble/finsemble-ui/react/components/FinsembleProvider";
import "@finsemble/finsemble-ui/react/assets/css/finsemble.css";
import "../../../../public/assets/css/theme.css";
import TemperatureConverter from "./TemperatureConverter";

const TemperatureDialog = () =>
{
	return <>{<TemperatureConverter/>}</>;
};

ReactDOM.render(
	<FinsembleProvider>
		<TemperatureDialog />
	</FinsembleProvider>,
	document.getElementById("TemperatureDialog-tsx")
);
