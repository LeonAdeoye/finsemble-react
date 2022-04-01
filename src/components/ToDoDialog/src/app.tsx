import React from "react";
import ReactDOM from "react-dom";
import { FinsembleProvider } from "@finsemble/finsemble-ui/react/components/FinsembleProvider";
import "@finsemble/finsemble-ui/react/assets/css/finsemble.css";
import "../../../../public/assets/css/theme.css";
import ToDo from "./ToDo";

const ToDoDialog = () =>
{
	return <>{<ToDo/>}</>;
};

ReactDOM.render(
	<FinsembleProvider>
		<ToDoDialog />
	</FinsembleProvider>,
	document.getElementById("ToDoDialog-tsx")
);
