const express = require("express");
const prisma = require("@prisma/client");
const app = express();
const db = new prisma.PrismaClient();

app.get("/", async (req, res) => {
  const deliveries = await db.delivery.findMany();
  console.log(deliveries);
  res.send(JSON.stringify(deliveries));
});

app.listen(3000);
