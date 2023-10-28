import Express from "express";

const app = Express();

const HOST = process.env.HOST || "localhost"
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on http://${HOST}:${PORT}`);
});

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});
 