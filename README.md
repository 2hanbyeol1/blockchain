# BLOCKCHAIN

📖 `자바스크립트와 함께하는 블록체인 코딩` 클론 코딩을 하며 블록체인 공부를 해봅시다

---

## HOW TO START

```
npm start node_1
npm start node_2
npm start node_3
```

## API

### 네트워크에 새 노드 등록 및 브로드캐스트

POST http://localhost:3001/register-and-broadcast-node

body

```json
{
  "newNodeUrl": "http://localhost:3002"
}
```

---

### 블록 채굴 및 브로드캐스트

GET http://localhost:3001/mine

---

### Transaction 생성 및 브로드캐스트

POST http://localhost:3001/transaction/broadcast

```json
{
  "amount": 300,
  "sender": "ABCDEFG",
  "recipient": "HIJKLMN"
}
```
