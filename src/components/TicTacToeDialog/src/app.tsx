import React from "react";
import ReactDOM from "react-dom";
import { FinsembleProvider } from "@finsemble/finsemble-ui/react/components/FinsembleProvider";
import "@finsemble/finsemble-ui/react/assets/css/finsemble.css";
import "../../../../public/assets/css/theme.css";
import Game from "./Game";
import './../tictactoe.css';

const TicTacToeDialog = () => {
	return <>{<Game/>}</>;
};

ReactDOM.render(
	<FinsembleProvider>
		<TicTacToeDialog />
	</FinsembleProvider>,
	document.getElementById("TicTacToeDialog-tsx")
);
