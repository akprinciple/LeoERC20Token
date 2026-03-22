export const TOKEN_FAUCET_ABI = [
  // Events
  "event Approval(address indexed _owner, address indexed _spender, uint256 _value)",
  "event Transfer(address indexed _from, address indexed _to, uint256 _value)",

  // State mutating functions
  "function approve(address _spender, uint256 _value) returns (bool success)",
  "function mint(uint256 _amount)",
  "function requestTokens(uint256 _amount)",
  "function transfer(address _to, uint256 _value) returns (bool success)",
  "function transferFrom(address _from, address _to, uint256 _value) returns (bool success)",

  // View & Pure functions
  "function WAIT_TIME() view returns (uint256)",
  "function allowance(address _owner, address _spender) view returns (uint256 remaining)",
  "function balanceOf(address _owner) view returns (uint256 balance)",
  "function decimals() pure returns (uint8)",
  "function lastRequestTime(address account) view returns (uint256)",
  "function maxRequestAmount() pure returns (uint256)",
  "function maxSupply() pure returns (uint256)",
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function totalSupply() view returns (uint256)"
] as const;