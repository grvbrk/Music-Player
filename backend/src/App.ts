import express, {ErrorRequestHandler} from "express";
const app = express();
import "dotenv/config";
import cors from "cors";
import RouteNotFound from "./middlewares/RouteNotFound";

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(RouteNotFound)

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
