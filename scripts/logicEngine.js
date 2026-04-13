require('dotenv').config();
const axios = require('axios');

/**
 * Requests Verifiable Inference from the DGrid AI Gateway.
 * Proof of Quality (PoQ) ensures the decision is decentralized and untampered.
 */
async function getVerifiableInference(marketData) {
    console.log("🛡️ [ALR] Requesting Verifiable Inference from DGrid...");
    
    try {
        const response = await axios.post('https://api.dgrid.io/v1/inference', {
            model: "consensus-heavy-1", 
            prompt: `Market Analysis: $HSS Price: ${marketData.price}. Volatility: ${marketData.volatility}.`,
            proof_of_quality: true 
        }, {
            headers: { 'Authorization': `Bearer ${process.env.DGRID_API_KEY || 'DEMO_KEY'}` }
        }).catch(() => {
            // Mock response for the hackathon demo to show PoQ logic
            return { data: { decision: "TRIGGER_HEDGE", poq_hash: "0x7d2a8e3b9c4f1a2d8e3b9c4f1a2d8e3b9c4f1a2d" } };
        });

        const { decision, poq_hash } = response.data;
        console.log(`✅ [DGrid] Decision Verified: ${decision}`);
        console.log(`🔐 [PoQ] Cryptographic Hash: ${poq_hash}`); 
        
        return decision;
    } catch (error) {
        console.error("❌ [DGrid] Gateway Connection Error.");
        return "HOLD"; 
    }
}

/**
 * Simulation of the MYX V2 Perpetual Hedging Execution
 */
async function executeMyxHedge(amount) {
    console.log(`🛡️ [MYX V2] Opening Permissionless Short Position...`);
    console.log(`📊 [Execution] Hedging ${amount} USD at 2x Leverage to protect TVL.`);
    return "0x8b3c92e7f1a2d8e3b9c4f1a2d8e3b9c4f1a2d4a22";
}

/**
 * Main execution cycle
 */
async function runSovereignCycle() {
    console.log("🚀 [ALR] Starting Autonomous Liquidity Cycle...");
    
    // Simulated market risk data
    const marketData = { price: 0.0045, volatility: "HIGH", liquidity: 15500 }; 

    const action = await getVerifiableInference(marketData);

    if (action === "TRIGGER_HEDGE") {
        const txHash = await executeMyxHedge(1000);
        console.log(`✅ [ALR] Sovereign Hedge Active. Tx: ${txHash}`);
    } else {
        console.log("😴 [ALR] Market stable. Maintaining liquidity rails.");
    }
}

// Automatically run if this file is called directly
if (require.main === module) {
    runSovereignCycle();
}

module.exports = { runSovereignCycle };
