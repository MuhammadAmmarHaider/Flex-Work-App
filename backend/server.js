const express = require("express")
const mongoose = require("mongoose")
const jobRouters = require("./routes/job.router")
const proposalRoutes = require('./routes/proposal.router');
const userRoutes = require('./routes/user.router');
const authRoutes = require("./routes/auth")
const dotenv = require("dotenv")
const cors = require('cors');

const app = express();
dotenv.config();

const port = process.env.PORT || 5001
const connectionString = process.env.MONGO_URL

// middlewares
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));


// routes middlewares
app.use('/jobs', jobRouters);
app.use("/proposals", proposalRoutes);
app.use("/users", userRoutes);
app.use(authRoutes);

mongoose.connect(connectionString)
    .then(() => {
        console.log("database connected successfully");
        app.listen(port, () => {
            console.log("server is running at port ", port)
        })
    })
    .catch((e) => {
        console.log("database not connected");
        console.log(e.message);
    })
