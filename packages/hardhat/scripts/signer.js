const fs = require('fs');
const ethers = require('ethers')

const prepAddresses = [
  '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
  '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',
  '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',
  '0x90F79bf6EB2c4f870365E785982E1f101E93b906',
]

const execAddresses = [
  '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',
  '0x90F79bf6EB2c4f870365E785982E1f101E93b906',
]

async function signWith(signer, addresses) {
  const messages = {}
  for (let i = 0; i < addresses.length; i++) {
    const message = `0x000000000000000000000000${addresses[i].substring(2)}`
    const signed = await signer.signMessage(ethers.utils.arrayify(message))
    messages[addresses[i]] = signed
  }
  return messages
}

async function run() {
  const prepWallet = ethers.Wallet.createRandom()
  const execWallet = ethers.Wallet.createRandom()

  const prepSigs = await signWith(prepWallet, prepAddresses)
  const execSigs = await signWith(execWallet, execAddresses)

  fs.mkdirSync('./output')
  fs.writeFileSync('./output/prepSigs.json', JSON.stringify(prepSigs, null, 2))
  fs.writeFileSync('./output/execSigs.json', JSON.stringify(execSigs, null, 2))
  fs.writeFileSync('./output/signers.json', JSON.stringify({
    prepSigner: prepWallet.address,
    execSigner: execWallet.address
  }, null, 2))
}

run()