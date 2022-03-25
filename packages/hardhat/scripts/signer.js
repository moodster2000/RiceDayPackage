const fs = require('fs');
const ethers = require('ethers')

const prepAddresses = [
  '0x19b260a039eDa8b896F4c7463445Fb94b4C86a85',
  '0xf0773736d0f58b04CB17476e5619d528f4Efb0da',
  '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',
  '0x1bb247BE04b3560ef38CE2b013e971D49B90eEa6',
]

const execAddresses = [
  '0xC8903A1BeB1772bFad93F942951eB17455830985',
  '0xcdD6f0E4B7c2f58C92F28Ed6837aCA27D24ce9e4',
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