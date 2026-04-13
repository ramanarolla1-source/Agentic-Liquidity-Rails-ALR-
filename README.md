# Agentic-Liquidity-Rails (ALR)

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Network](https://img.shields.io/badge/Network-BNB%20Chain-F3BA2F?logo=binance)](https://www.bnbchain.org/)
[![AI-Gateway](https://img.shields.io/badge/AI--Gateway-DGrid-green)](https://dgrid.io)

> **Verifiable, Autonomous Liquidity Infrastructure for the Sovereign Agent Economy.**

## **Overview**
**Agentic-Liquidity-Rails (ALR)** is a decentralized execution layer designed for AI agents to autonomously launch tokens, manage liquidity, and hedge market risk without human intervention. By integrating **DGrid’s Proof of Quality (PoQ)** for verifiable inference and **MYX V2’s Permissionless Engine** for perpetual hedging, ALR provides a "National Trust" alternative to centralized, black-box trading bots.

ALR is built as a specialized DeFi extension of the **Horizon Sovereign Stack (HSS)**.

## **Core Features**
* **🚀 Autonomous Agentic Launch:** Utilizing Four.meme’s "Agentic Mode" to deploy sovereign utility tokens with automated bonding curve management.
* **🧠 Verifiable Intelligence:** All trading and hedging decisions are routed through the DGrid AI Gateway, ensuring that AI inference is cryptographically verified and untampered.
* **🛡️ Permissionless Perp Hedging:** Real-time risk mitigation via MYX V2. Agents autonomously open short positions to hedge treasury value during high volatility.
* **🆔 Hardware-Anchored Identity:** Execution is bound to secure, hardware-vetted credentials, preventing bot-farm manipulation and ensuring "Sovereign" accountability.

## **System Architecture**

```mermaid
graph TD
    A[DGrid AI Gateway] -->|Verifiable Inference| B[ALR Logic Engine]
    B -->|Launch Token| C[Four.meme Bonding Curve]
    B -->|Hedge Risk| D[MYX V2 Perp Engine]
    E[National Trust Identity] --- B
Inference Layer: DGrid Gateway fetches multi-model consensus on market risk.

Logic Layer (ALR): Evaluates liquidity depth on Four.meme bonding curves.

Execution Layer: * Normal Ops: Maintains "Sovereign" liquidity rails.

Risk Event: Triggers a MYX V2 Perp Hedge (Short) to protect the $20,000 TVL threshold.

Quick Start
Prerequisites
Node.js 20+

BNB Chain Mainnet Account

Installation
git clone [https://github.com/ramanarolla1-source/Agentic-Liquidity-Rails.git](https://github.com/ramanarolla1-source/Agentic-Liquidity-Rails.git)
cd Agentic-Liquidity-Rails
npm install
Configure Environment
Create a .env file:
DGRID_API_KEY=your_dgrid_key
MYX_V2_PRIVATE_KEY=your_wallet_key
FOUR_MEME_PROXY=0x5c952063c7fc8610FFDB798152D69F0B9550762b
Run Agentic Launcher
node scripts/launchHSS.js
Roadmap & BUIDL Status
Phase 1: Agentic Mode Token Launch (Four.meme) — [COMPLETED]

Phase 2: DGrid Verifiable Inference Integration — [IN PROGRESS]

Phase 3: MYX V2 Permissionless Perp Activation — [TARGET: APRIL 29]

License
Distributed under the Apache License 2.0. See LICENSE for more information.

Strategic Note for Judges
ALR solves the "Trust Overhead" in autonomous finance. By anchoring AI decisions in DGrid and risk management in MYX, we move from "Meme-bots" to Sovereign Agentic Infrastructure.
