const express = require('express');
const mongoose = require ('mongoose');
const cors = require ('cors');
const app = express();
app.use(cors());

app.use(express.json());

mongoose.connect(
    'mongodb+srv://owenz0523:IMblueming@cluster0.bz7q0e3.mongodb.net/Cluster0',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

const emailSchema = new mongoose.Schema({
    email: String,
});

const Email = mongoose.model('Email', emailSchema);

app.post('/submit-email', async (req, res) => {
    const { email } = req.body;
    const newEmail = new Email({ email });
    await newEmail.save();
    res.send('Email saved');
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.get('/', (request, response) => {
    response.json({mssg: "Welcome to the app"})
});