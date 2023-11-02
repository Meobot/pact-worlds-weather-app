import express from "express";
import { MongoClient, ServerApiVersion } from "mongodb";

const router = express.Router();

// eslint-disable-next-line no-undef
const dbURI = import.meta.env.ATLAS_URI

router.get("/weather", async (req, res) => {
	try {
		const client = new MongoClient(dbURI, {
			serverApi: {
				version: ServerApiVersion.v1,
				strict: true,
				deprecationErrors: true,
			},
		});
		await client.connect();

		const database = client.db("pact-worlds-db");
		const collection = database.collection("CastrovelWeather");

		// Find a specific document by some criteria, for example, by name
		const weatherData = await collection.findOne({
			planetName: "Castrovel",
		});

		// Send the weather data as a response
		res.json(weatherData);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

export default router;
