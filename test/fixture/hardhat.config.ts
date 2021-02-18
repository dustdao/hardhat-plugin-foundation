// We load the plugin here.
import { HardhatUserConfig } from "hardhat/types";

import "../../src/index";

const config: HardhatUserConfig = {
  solidity: "0.6.12",
  defaultNetwork: "hardhat"
};

export default config;