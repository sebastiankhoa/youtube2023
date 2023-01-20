import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";

import theme from "./chakra/theme";
import App from "./App";
import { RecoilRoot } from "recoil";

export const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<ChakraProvider theme={theme}>
		<RecoilRoot>
			<App />
		</RecoilRoot>
	</ChakraProvider>
);
