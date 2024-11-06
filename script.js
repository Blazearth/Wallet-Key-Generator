// Ethereum Key Generation
document.getElementById("generate-eth-button").addEventListener("click", function() {
  const wallet = ethers.Wallet.createRandom();
  
  // Display Ethereum Address and Private Key
  document.getElementById("eth-address").innerText = `Address: ${wallet.address}`;
  document.getElementById("eth-private-key").innerText = `Private Key: ${wallet.privateKey}`;
});

// Solana Key Generation
document.getElementById("generate-sol-button").addEventListener("click", function() {
  // Ensure solanaWeb3 is defined
  if (window.solanaWeb3) {
      const keypair = solanaWeb3.Keypair.generate();
      
      // Display Solana Address
      document.getElementById("sol-address").innerText = `Address: ${keypair.publicKey.toString()}`;
      
      // Convert the private key to hex format and display it
      const privateKeyHex = Array.from(keypair.secretKey)
          .map(b => b.toString(16).padStart(2, '0'))
          .join('');
      document.getElementById("sol-private-key").innerText = `Private Key: ${privateKeyHex}`;
  } else {
      console.error("Solana Web3 library not loaded");
  }
});
