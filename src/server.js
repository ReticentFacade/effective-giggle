import express from "express";
// import apiRoutes from "handlers/routes.js";

const app = express();

// Register your API routes
// app.use('/api', apiRoutes);

app.get('/', (req,res) => {
    res.send("Hello, world!");
});

// middleware...

// Start server: 
app.listen(3001, () => {
    console.log("Server started on port 3001");
});