"use client"

import React from "react";
import { Config, WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { XellarKitProvider, defaultConfig, darkTheme, lightTheme } from "@xellar/kit";
import { base, baseSepolia, lisk, liskSepolia, polygonAmoy } from "viem/chains";

const walletConnectProjectId = "YOUR_WALLET_CONNECT_PROJECT_ID";
const xellarAppId = "eeb84396-c025-4cac-a75d-109fe5c2046d";

const config = defaultConfig({
    appName: "Xellar",
    walletConnectProjectId,
    xellarAppId,
    xellarEnv: "sandbox",
    chains: [lisk, liskSepolia, base, baseSepolia],
}) as Config;

const queryClient = new QueryClient();

export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <XellarKitProvider theme={lightTheme} customLogoHeight={42}>{children}</XellarKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
};
