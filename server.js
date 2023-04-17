import express from "express";
import pool from "./db/pg.js";

const app = express();
const port = process.env.PORT || 8000;

app.get("/", async (req, res) => {
  try {
    const query = "SELECT * FROM Travel";
    const { rows: countries } = await pool.query(query);
    res.json(countries);
  } catch (e) {
    res.json({ error: e.message });
  }
});

app.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const query = "SELECT * FROM Travel WHERE id = $1";
    const { rows: country } = await pool.query(query, [id]);
    res.json(country);
  } catch (e) {
    res.json({ error: e.message });
  }
});

app.listen(port, () => {
  console.log(`Your app listening on port ${port}`);
});
