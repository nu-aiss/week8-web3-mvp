import "./style.css";

import {
  Connection,
  PublicKey,
  LAMPORTS_PER_SOL,
} from "@solana/web3.js";

const DEVNET_RPC = "https://api.devnet.solana.com";

const WALLET_ADDRESS =
  "6AafER3aefcKUgQacaqLWXor5CbDruAMNM8j9prbggfb";

const MINT_ADDRESS =
  "8k3CBUdt34t9kyQGmChwMtzJW4yg91rpAee8s6qKh3Zc";

const OWNER_TOKEN_ACCOUNT =
  "G4MSqHQqV6rNG6ZzaEUxB8sYxz275EpLQA2AwJR3b78f";

const RECIPIENT_ADDRESS =
  "H6HwqT1TvH4EYZfcxCn9fmXd3b1hw4YYRWu14LwxpLse";

const RECIPIENT_TOKEN_ACCOUNT =
  "8ySWjNcbQnUXHWeh6aSJ3B48eLzPb3NSJuY7kvL2mG2M";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <main class="container">

    <header class="header">
      <div>
        <p class="eyebrow">WEEK 8 • SOLANA DEVNET</p>
        <h1>Web3 Student Dashboard</h1>
        <p class="subtitle">
          Рабочий Web3 MVP для просмотра данных кошелька и токена AIS.
        </p>
      </div>

      <div class="network">
        <span class="dot"></span>
        Devnet
      </div>
    </header>

    <section class="wallet-card">
      <div>
        <p class="label">Подключённый кошелёк</p>
        <p class="address">${WALLET_ADDRESS}</p>
      </div>

      <a
        class="explorer-button"
        href="https://explorer.solana.com/address/${WALLET_ADDRESS}?cluster=devnet"
        target="_blank"
      >
        Solana Explorer
      </a>
    </section>

    <section class="grid">

      <article class="card">
        <p class="label">SOL Balance</p>
        <h2 id="sol-balance">Loading...</h2>
        <p class="small">Solana Devnet</p>
      </article>

      <article class="card">
        <p class="label">Token</p>
        <h2>Aisana Token</h2>
        <p class="token-symbol">AIS</p>
      </article>

      <article class="card">
        <p class="label">Total Supply</p>
        <h2 id="total-supply">Loading...</h2>
        <p class="small">AIS</p>
      </article>

      <article class="card">
        <p class="label">My AIS Balance</p>
        <h2 id="owner-balance">Loading...</h2>
        <p class="small">AIS</p>
      </article>

      <article class="card">
        <p class="label">Recipient Balance</p>
        <h2 id="recipient-balance">Loading...</h2>
        <p class="small">AIS</p>
      </article>

      <article class="card">
        <p class="label">Decimals</p>
        <h2 id="decimals">Loading...</h2>
        <p class="small">Token-2022</p>
      </article>

    </section>

    <section class="info-card">
      <h3>Token Information</h3>

      <div class="info-row">
        <span>Mint Address</span>
        <code>${MINT_ADDRESS}</code>
      </div>

      <div class="info-row">
        <span>Owner Token Account</span>
        <code>${OWNER_TOKEN_ACCOUNT}</code>
      </div>

      <div class="info-row">
        <span>Recipient</span>
        <code>${RECIPIENT_ADDRESS}</code>
      </div>

      <div class="info-row">
        <span>Recipient Token Account</span>
        <code>${RECIPIENT_TOKEN_ACCOUNT}</code>
      </div>
    </section>

    <section class="transfer-card">

      <div>
        <p class="label">Последний проверенный сценарий</p>
        <h3>Transfer Result</h3>

        <p class="transfer-text">
          1000 AIS → отправлено 150 AIS → осталось 850 AIS
        </p>
      </div>

      <div class="transfer-result">
        <div>
          <span>Owner</span>
          <strong id="owner-result">850 AIS</strong>
        </div>

        <div>
          <span>Recipient</span>
          <strong id="recipient-result">150 AIS</strong>
        </div>
      </div>

    </section>

    <section class="status-card">
      <h3>MVP Status</h3>

      <div class="status-grid">
        <div>✅ Solana Devnet connected</div>
        <div>✅ Wallet data loaded</div>
        <div>✅ Token detected</div>
        <div>✅ Blockchain balances loaded</div>
      </div>
    </section>

    <div class="actions">

      <button id="refresh-button">
        Обновить данные
      </button>

      <a
        href="https://explorer.solana.com/address/${MINT_ADDRESS}?cluster=devnet"
        target="_blank"
        class="mint-link"
      >
        Открыть AIS в Explorer
      </a>

    </div>

    <p id="status-message" class="status-message">
      Загрузка данных из блокчейна...
    </p>

  </main>
`;

const connection = new Connection(
  DEVNET_RPC,
  "confirmed"
);

async function loadBlockchainData() {
  const status =
    document.querySelector<HTMLParagraphElement>(
      "#status-message"
    )!;

  const refreshButton =
    document.querySelector<HTMLButtonElement>(
      "#refresh-button"
    )!;

  try {
    status.textContent =
      "Получение данных из Solana Devnet...";

    refreshButton.disabled = true;

    const wallet = new PublicKey(WALLET_ADDRESS);
    const mint = new PublicKey(MINT_ADDRESS);

    const ownerTokenAccount =
      new PublicKey(OWNER_TOKEN_ACCOUNT);

    const recipientTokenAccount =
      new PublicKey(RECIPIENT_TOKEN_ACCOUNT);

    const [
      walletBalance,
      supplyInfo,
      ownerBalanceInfo,
      recipientBalanceInfo,
    ] = await Promise.all([
      connection.getBalance(wallet),

      connection.getTokenSupply(mint),

      connection.getTokenAccountBalance(
        ownerTokenAccount
      ),

      connection.getTokenAccountBalance(
        recipientTokenAccount
      ),
    ]);

    const solBalance =
      walletBalance / LAMPORTS_PER_SOL;

    const totalSupply =
      supplyInfo.value.uiAmountString ??
      supplyInfo.value.amount;

    const ownerBalance =
      ownerBalanceInfo.value.uiAmountString ??
      ownerBalanceInfo.value.amount;

    const recipientBalance =
      recipientBalanceInfo.value.uiAmountString ??
      recipientBalanceInfo.value.amount;

    document.querySelector<HTMLHeadingElement>(
      "#sol-balance"
    )!.textContent =
      `${solBalance.toFixed(4)} SOL`;

    document.querySelector<HTMLHeadingElement>(
      "#total-supply"
    )!.textContent =
      totalSupply;

    document.querySelector<HTMLHeadingElement>(
      "#owner-balance"
    )!.textContent =
      ownerBalance;

    document.querySelector<HTMLHeadingElement>(
      "#recipient-balance"
    )!.textContent =
      recipientBalance;

    document.querySelector<HTMLHeadingElement>(
      "#decimals"
    )!.textContent =
      supplyInfo.value.decimals.toString();

    document.querySelector<HTMLElement>(
      "#owner-result"
    )!.textContent =
      `${ownerBalance} AIS`;

    document.querySelector<HTMLElement>(
      "#recipient-result"
    )!.textContent =
      `${recipientBalance} AIS`;

    status.textContent =
      "✅ Данные успешно загружены из Solana Devnet.";

  } catch (error) {
    console.error(error);

    status.textContent =
      "❌ Не удалось загрузить данные. Проверь интернет или Devnet RPC.";

  } finally {
    refreshButton.disabled = false;
  }
}

document
  .querySelector<HTMLButtonElement>(
    "#refresh-button"
  )!
  .addEventListener(
    "click",
    loadBlockchainData
  );

loadBlockchainData();