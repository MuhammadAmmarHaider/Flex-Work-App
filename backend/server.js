const express = require("express")
const mongoose = require("mongoose")
const jobRouters = require("./routes/job.router")
const proposalRoutes = require('./routes/proposal.router');
const userRoutes = require('./routes/user.router');
const dotenv = require("dotenv")

const app = express();
dotenv.config();

const port = process.env.PORT || 5001
const connectionString = process.env.MONGO_URL //running on localhost:5000 currently

// middlewares
app.use(express.json());


// routes middlewares
app.use('/jobs', jobRouters);
app.use("/proposals", proposalRoutes);
app.use("/users", userRoutes);

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
