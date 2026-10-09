# Week 8 — Web3 Student Dashboard MVP

## Описание
Этот проект был выполнен в рамках 8 недели курса по Solana.

Тема недели-BUILD SPRINT: первый Web3 MVP.

Цель работы-создать работающий Web3-прототип, который получает реальные данные из сети Solana Devnet и отображает их пользователю через веб-интерфейс.

В качестве MVP был разработан Web3 Student Dashboard.

Приложение отображает:

- подключённый Solana-кошелёк;
- баланс SOL;
- данные токена Aisana Token (AIS);
- общий supply токена;
- баланс владельца;
- баланс получателя;
- decimals;
- адрес mint;
- token accounts;
- статус подключения к Solana Devnet.

## Использованные технологии
- TypeScript
- Vite
- HTML
- CSS
- Solana Web3.js
- Solana Devnet
- Token-2022
- Git
- GitHub

## Сеть
```text
Solana Devnet
```

## Wallet
```text
6AafER3aefcKUgQacaqLWXor5CbDruAMNM8j9prbggfb
```

## Token
```text
Name: Aisana Token
Symbol: AIS
```

## Mint Address
```text
8k3CBUdt34t9kyQGmChwMtzJW4yg91rpAee8s6qKh3Zc
```

## Token-2022
Токен AIS был создан на предыдущей неделе с использованием Token-2022.

Приложение Week 8 использует реальные данные этого токена из сети Solana Devnet.

## Данные токена
```text
Decimals: 2
Total Supply: 1000 AIS
Owner Balance: 850 AIS
Recipient Balance: 150 AIS
```

## Owner Token Account
```text
G4MSqHQqV6rNG6ZzaEUxB8sYxz275EpLQA2AwJR3b78f
```

## Recipient
```text
H6HwqT1TvH4EYZfcxCn9fmXd3b1hw4YYRWu14LwxpLse
```

## Recipient Token Account
```text
8ySWjNcbQnUXHWeh6aSJ3B48eLzPb3NSJuY7kvL2mG2M
```

## Возможности MVP
Web3 Student Dashboard выполняет следующие функции:

- подключается к Solana Devnet;
- получает актуальный баланс SOL;
- получает информацию о токене AIS;
- получает общий supply токена;
- получает баланс владельца AIS;
- получает баланс получателя AIS;
- показывает Token-2022 decimals;
- позволяет обновлять blockchain-данные кнопкой;
- содержит ссылки на Solana Explorer.

## Transfer Result
В приложении отображается результат выполненной операции с токеном:

```text
1000 AIS → отправлено 150 AIS → осталось 850 AIS
```

Баланс:

```text
Owner: 850 AIS
Recipient: 150 AIS
```

## MVP Status
В работающем приложении успешно отображаются следующие статусы:

```text
Solana Devnet connected
Wallet data loaded
Token detected
Blockchain balances loaded
```

## Запуск проекта
Установка зависимостей:

```bash
npm install
```

Запуск development server:

```bash
npm run dev
```

После запуска приложение доступно локально:

```text
http://localhost:5173/
```

## Проверка сборки
```bash
npm run build
```

## Структура проекта
```text
week8-web3-mvp
├── src
│   ├── main.ts
│   └── style.css
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

## Результат
В рамках Week 8 был создан работающий Web3 MVP в виде браузерного дэшборда.

Приложение получает реальные данные из Solana Devnet и отображает информацию о кошельке и Token-2022 токене AIS.

Основные результаты:

```text
Network: Solana Devnet
Token: Aisana Token (AIS)
Total Supply: 1000 AIS
Owner Balance: 850 AIS
Recipient Balance: 150 AIS
Decimals: 2
```

Таким образом, был создан работающий Web3-прототип, который взаимодействует с блокчейном Solana и визуально отображает on-chain данные.