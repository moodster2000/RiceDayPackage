import { Button, Col, Menu, Row } from "antd";
import "antd/dist/antd.css";
import {
  useBalance,
  useContractLoader,
  useContractReader,
  useGasPrice,
  useOnBlock,
  useUserProviderAndSigner,
} from "eth-hooks";
import { useExchangeEthPrice } from "eth-hooks/dapps/dex";
import React, { useCallback, useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Switch, useLocation, useHistory } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./App.css";
import "./App.scss";
import {
  Account,
  Contract,
  Faucet,
  GasGauge,
  Header,
  Ramp,
  ThemeSwitch,
  NetworkDisplay,
  FaucetHint,
  NetworkSwitch,
  Footer,
  Roadmap,
  FAQ,
  About,
  HomePage,
  Team,
  MusicPlayer,
  AppBar,
  MobileFooter,
  MobileFAQ,
  MobileRoadmap,
  MobileTeam,
  MobileAbout,
  MobileHomePage,
  MobileAppbar,
  UnknownPage,
  MintPage,
  MobileMintPage,
  MobileUnknownPage,
} from "./components";
import { NETWORKS, ALCHEMY_KEY } from "./constants";
import externalContracts from "./contracts/external_contracts";
// contracts
import deployedContracts from "./contracts/hardhat_contracts.json";
import { Transactor, Web3ModalSetup } from "./helpers";
import { Home, ExampleUI, Hints, Subgraph } from "./views";
import { useStaticJsonRPC } from "./hooks";
import banner from "./bannerRD.png";
import backgroundImage from "./background.png";
import backgroundVideo from "./backgroundVideo.mp4";
import mobileBackground from "./mobileBackground.png";

import playLogo from "./logo/Play.svg";
import pauseLogo from "./logo/Pause.svg";
import twitterLogo from "./logo/Twitter.svg";
import mediumLogo from "./logo/Medium.svg";
import discordLogo from "./logo/Discord.svg";
import themeSong from "./themeSong.wav";
import useSound from "use-sound";
import ReactPlayer from "react-player";
import mobile from "is-mobile";
import { useMediaQuery } from "react-responsive";

const { ethers } = require("ethers");
/*
    Welcome to 🏗 scaffold-eth !

    Code:
    https://github.com/scaffold-eth/scaffold-eth

    Support:
    https://t.me/joinchat/KByvmRe5wkR-8F_zz6AjpA
    or DM @austingriffith on twitter or telegram

    You should get your own Alchemy.com & Infura.io ID and put it in `constants.js`
    (this is your connection to the main Ethereum network for ENS etc.)


    🌏 EXTERNAL CONTRACTS:
    You can also bring in contract artifacts in `constants.js`
    (and then use the `useExternalContractLoader()` hook!)
*/

/// 📡 What chain are your contracts deployed to?
const initialNetwork = NETWORKS.localhost; // <------- select your target frontend network (localhost, rinkeby, xdai, mainnet)

// 😬 Sorry for all the console logging
const DEBUG = true;
const NETWORKCHECK = true;
const USE_BURNER_WALLET = true; // toggle burner wallet feature
const USE_NETWORK_SELECTOR = false;

const web3Modal = Web3ModalSetup();

// 🛰 providers
const providers = [
  "https://eth-mainnet.gateway.pokt.network/v1/lb/611156b4a585a20035148406",
  `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_KEY}`,
  "https://rpc.scaffoldeth.io:48544",
];

function App(props) {
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  // specify all the chains your app is available on. Eg: ['localhost', 'mainnet', ...otherNetworks ]
  // reference './constants.js' for other networks
  const networkOptions = [initialNetwork.name, "mainnet", "rinkeby"];

  const [injectedProvider, setInjectedProvider] = useState();
  const [address, setAddress] = useState();
  const [selectedNetwork, setSelectedNetwork] = useState(networkOptions[2]);
  const location = useLocation();

  //audio Controls
  const [pausePlay, setPausePlay] = useState("play");
  const [play, { stop }] = useSound(themeSong, {
    volume: 0.2,
  });

  const targetNetwork = NETWORKS[selectedNetwork];

  // 🔭 block explorer URL
  const blockExplorer = targetNetwork.blockExplorer;

  // load all your providers
  const localProvider = useStaticJsonRPC([
    process.env.REACT_APP_PROVIDER ? process.env.REACT_APP_PROVIDER : targetNetwork.rpcUrl,
  ]);
  const mainnetProvider = useStaticJsonRPC(providers);

  if (DEBUG) console.log(`Using ${selectedNetwork} network`);

  // 🛰 providers
  if (DEBUG) console.log("📡 Connecting to Mainnet Ethereum");

  const logoutOfWeb3Modal = async () => {
    await web3Modal.clearCachedProvider();
    if (injectedProvider && injectedProvider.provider && typeof injectedProvider.provider.disconnect == "function") {
      await injectedProvider.provider.disconnect();
    }
    setTimeout(() => {
      window.location.reload();
    }, 1);
  };

  /* 💵 This hook will get the price of ETH from 🦄 Uniswap: */
  const price = useExchangeEthPrice(targetNetwork, mainnetProvider);

  /* 🔥 This hook will get the price of Gas from ⛽️ EtherGasStation */
  const gasPrice = useGasPrice(targetNetwork, "fast");
  // Use your injected provider from 🦊 Metamask or if you don't have it then instantly generate a 🔥 burner wallet.
  const userProviderAndSigner = useUserProviderAndSigner(injectedProvider, localProvider, USE_BURNER_WALLET);
  const userSigner = userProviderAndSigner.signer;

  useEffect(() => {
    async function getAddress() {
      if (userSigner) {
        const newAddress = await userSigner.getAddress();
        setAddress(newAddress);
      }
    }
    getAddress();
  }, [userSigner]);

  // You can warn the user if you would like them to be on a specific network
  const localChainId = localProvider && localProvider._network && localProvider._network.chainId;
  const selectedChainId =
    userSigner && userSigner.provider && userSigner.provider._network && userSigner.provider._network.chainId;

  // For more hooks, check out 🔗eth-hooks at: https://www.npmjs.com/package/eth-hooks

  // The transactor wraps transactions and provides notificiations
  const tx = Transactor(userSigner, gasPrice);

  // 🏗 scaffold-eth is full of handy hooks like this one to get your balance:
  const yourLocalBalance = useBalance(localProvider, address);

  // Just plug in different 🛰 providers to get your balance on different chains:
  const yourMainnetBalance = useBalance(mainnetProvider, address);

  // const contractConfig = useContractConfig();

  const contractConfig = { deployedContracts: deployedContracts || {}, externalContracts: externalContracts || {} };

  // Load in your local 📝 contract and read a value from it:
  const readContracts = useContractLoader(localProvider, contractConfig);

  // If you want to make 🔐 write transactions to your contracts, use the userSigner:
  const writeContracts = useContractLoader(userSigner, contractConfig, localChainId);

  // EXTERNAL CONTRACT EXAMPLE:
  //
  // If you want to bring in the mainnet DAI contract it would look like:
  const mainnetContracts = useContractLoader(mainnetProvider, contractConfig);

  // If you want to call a function on a new block
  useOnBlock(mainnetProvider, () => {
    console.log(`⛓ A new mainnet block is here: ${mainnetProvider._lastBlockNumber}`);
  });

  // Then read your DAI balance like:
  const myMainnetDAIBalance = useContractReader(mainnetContracts, "DAI", "balanceOf", [
    "0x34aA3F359A9D614239015126635CE7732c18fDF3",
  ]);

  // keep track of a variable from the contract in the local React state:
  const maxSupply = useContractReader(readContracts, "RiceDay", "MAX_SUPPLY");
  if (maxSupply) {
    console.log(`max supply bois`, maxSupply.toString());
  }
  /*
  const addressFromENS = useResolveName(mainnetProvider, "austingriffith.eth");
  console.log("🏷 Resolved austingriffith.eth as:",addressFromENS)
  */

  //
  // 🧫 DEBUG 👨🏻‍🔬
  //
  useEffect(() => {
    if (
      DEBUG &&
      mainnetProvider &&
      address &&
      selectedChainId &&
      yourLocalBalance &&
      yourMainnetBalance &&
      readContracts &&
      writeContracts &&
      mainnetContracts
    ) {
      console.log("_____________________________________ 🏗 scaffold-eth _____________________________________");
      console.log("🌎 mainnetProvider", mainnetProvider);
      console.log("🏠 localChainId", localChainId);
      console.log("👩‍💼 selected address:", address);
      console.log("🕵🏻‍♂️ selectedChainId:", selectedChainId);
      console.log("💵 yourLocalBalance", yourLocalBalance ? ethers.utils.formatEther(yourLocalBalance) : "...");
      console.log("💵 yourMainnetBalance", yourMainnetBalance ? ethers.utils.formatEther(yourMainnetBalance) : "...");
      console.log("📝 readContracts", readContracts);
      console.log("🌍 DAI contract on mainnet:", mainnetContracts);
      console.log("💵 yourMainnetDAIBalance", myMainnetDAIBalance);
      console.log("🔐 writeContracts", writeContracts);
    }
  }, [
    mainnetProvider,
    address,
    selectedChainId,
    yourLocalBalance,
    yourMainnetBalance,
    readContracts,
    writeContracts,
    mainnetContracts,
    localChainId,
    myMainnetDAIBalance,
  ]);

  const loadWeb3Modal = useCallback(async () => {
    const provider = await web3Modal.connect();
    setInjectedProvider(new ethers.providers.Web3Provider(provider));

    provider.on("chainChanged", chainId => {
      console.log(`chain changed to ${chainId}! updating providers`);
      setInjectedProvider(new ethers.providers.Web3Provider(provider));
    });

    provider.on("accountsChanged", () => {
      console.log(`account changed!`);
      setInjectedProvider(new ethers.providers.Web3Provider(provider));
    });

    // Subscribe to session disconnection
    provider.on("disconnect", (code, reason) => {
      console.log(code, reason);
      logoutOfWeb3Modal();
    });
    // eslint-disable-next-line
  }, [setInjectedProvider]);

  useEffect(() => {
    if (web3Modal.cachedProvider) {
      loadWeb3Modal();
    }
  }, [loadWeb3Modal]);

  const faucetAvailable = localProvider && localProvider.connection && targetNetwork.name.indexOf("local") !== -1;

  let history = useHistory();
  const [route, setRoute] = useState();
  useEffect(() => {
    setRoute(window.location.pathname);
  }, [setRoute]);

  return mobile() == false ? (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <section id="">
              <HomePage address={address} web3Modal={web3Modal} />
            </section>
            <section id="about">
              <About />
            </section>
            <section id="team">
              <Team />
            </section>
            <section id="roadmap">
              <Roadmap />
            </section>
            <section id="FAQ">
              <FAQ />
            </section>
            <Footer />
            <AppBar
              useBurner={USE_BURNER_WALLET}
              address={address}
              localProvider={localProvider}
              userSigner={userSigner}
              mainnetProvider={mainnetProvider}
              price={price}
              web3Modal={web3Modal}
              loadWeb3Modal={loadWeb3Modal}
              logoutOfWeb3Modal={logoutOfWeb3Modal}
              blockExplorer={blockExplorer}
            />
          </Route>
          <Route path="/minting">
            <MintPage
              address={address}
              loadWeb3Modal={loadWeb3Modal}
              web3Modal={web3Modal}
              readContracts={readContracts}
              writeContracts = {writeContracts}
              tx = {tx}
            />
            <AppBar
              useBurner={USE_BURNER_WALLET}
              address={address}
              localProvider={localProvider}
              userSigner={userSigner}
              mainnetProvider={mainnetProvider}
              price={price}
              web3Modal={web3Modal}
              loadWeb3Modal={loadWeb3Modal}
              logoutOfWeb3Modal={logoutOfWeb3Modal}
              blockExplorer={blockExplorer}
            />
          </Route>
          <Route path="*">
            <UnknownPage />
            <AppBar
              useBurner={USE_BURNER_WALLET}
              address={address}
              localProvider={localProvider}
              userSigner={userSigner}
              mainnetProvider={mainnetProvider}
              price={price}
              web3Modal={web3Modal}
              loadWeb3Modal={loadWeb3Modal}
              logoutOfWeb3Modal={logoutOfWeb3Modal}
              blockExplorer={blockExplorer}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  ) : isPortrait ? (
    <div className="mobileApp">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <section id="">
              <MobileHomePage address={address} web3Modal={web3Modal} />
            </section>
            <section id="about">
              <MobileAbout />
            </section>
            <section id="team">
              <MobileTeam />
            </section>
            <section id="roadmap">
              <MobileRoadmap />
            </section>
            <section id="FAQ">
              <MobileFAQ />
            </section>
            <MobileFooter />
            <MobileAppbar
              useBurner={USE_BURNER_WALLET}
              address={address}
              localProvider={localProvider}
              userSigner={userSigner}
              mainnetProvider={mainnetProvider}
              price={price}
              web3Modal={web3Modal}
              loadWeb3Modal={loadWeb3Modal}
              logoutOfWeb3Modal={logoutOfWeb3Modal}
              blockExplorer={blockExplorer}
            />
          </Route>
          <Route path="/minting">
            <MobileMintPage address={address} loadWeb3Modal={loadWeb3Modal} web3Modal={web3Modal} />
            <MobileAppbar
              useBurner={USE_BURNER_WALLET}
              address={address}
              localProvider={localProvider}
              userSigner={userSigner}
              mainnetProvider={mainnetProvider}
              price={price}
              web3Modal={web3Modal}
              loadWeb3Modal={loadWeb3Modal}
              logoutOfWeb3Modal={logoutOfWeb3Modal}
              blockExplorer={blockExplorer}
            />
          </Route>
          <Route path="*">
            <MobileUnknownPage />
            <MobileAppbar
              useBurner={USE_BURNER_WALLET}
              address={address}
              localProvider={localProvider}
              userSigner={userSigner}
              mainnetProvider={mainnetProvider}
              price={price}
              web3Modal={web3Modal}
              loadWeb3Modal={loadWeb3Modal}
              logoutOfWeb3Modal={logoutOfWeb3Modal}
              blockExplorer={blockExplorer}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  ) : (
    <div className="App">
      <video autoPlay loop muted className="background" poster={backgroundImage}></video>
      <div className="topBar" style={{ zIndex: 2, position: "absolute", left: 0, top: 0 }}>
        <div className="leftSide"></div>
        <div className="center">
          <img src={banner} className="banner" />
        </div>
        <div className="rightSide">
          {/* must link to socials */}
          <a className="logo" target="_blank" href="https://www.discord.gg/riceday">
            <img src={discordLogo} className="logo" />
          </a>
          <a className="logo" target="_blank" href="https://www.twitter.com/ricedaygg">
            <img src={twitterLogo} className="logo" />
          </a>
          {/* <a className="logo" target="_blank" href="https://www.twitter.com/ricedaygg">
          <img src={mediumLogo} className="logo" />
        </a> */}
        </div>
      </div>
      <div className="content">
        <div className="title">We're still cooking the rice</div>
        <div className="subTitle">
          RiceDay is Food + NFTs = connecting people from
          everywhere, one grain at a time.
        </div>
      </div>
    </div>
  );
}

export default App;

{
  /* <img
        fit
        src={mobileBackground}
        className="background"
        style={{ zIndex: -1, position: "absolute", left: 0, top: 0 }}
      />
      <div className="appBar">
        <div className="left">
          <img src={banner} className="banner" />
        </div>
        <div className="right">
          <button
            style={{ border: "none" }}
            className="logo"
            onClick={() => {
              if (pausePlay == "pause") {
                stop();
                setPausePlay("play");
              } else {
                setPausePlay("pause");
                play();
              }
            }}
          >
            {/* <img src={pausePlay == "pause" ? pauseLogo : playLogo} className="logo" /> */
}
//     </button>
//   </div>
// </div>
// <div className="content">
//   <div className="title">We're still cooking the rice</div>
//   <div className="subTitle">
//     RiceDay is aiming to create the first and best Web3 food loyalty program.
//     <br />
//     Food + NFTs = connecting people from everywhere, one grain at a time.
//   </div>
//   <div className="buttonRow">
//     <a className="buttonDesign" target="_blank" href="https://www.discord.gg/riceday">
//       <div className="buttonText">Discord</div>
//     </a>
//     <a className="buttonDesign" target="_blank" href="https://www.twitter.com/ricedaygg">
//       <div className="buttonText">Twitter</div>
//     </a>
//   </div>
// </div> */}
