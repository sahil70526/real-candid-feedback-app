import express from 'express'
import firebase from './firbase.js';
import admin from 'firebase-admin';


const app= express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

admin.initializeApp({
    credential: admin.credential.cert(firebase),
  });

  app.get("/searchUserByEmail/:email", async (req, res) => {
    try {
      const { email } = req.params;
      const newUserResponse = await admin.auth().getUserByEmail(email);
      res.json(newUserResponse);
    } catch (error) {
      res.json({
        Error: error,
      });
    }
  });

  app.post("/sign-up", async (req, res) => {
    try {
      const newUserResponse = await admin.auth().createUser({
        email: req.body.email,
        password: req.body.password,
        emailVerified: false,
        disabled: false,
      });
      //res.status(200);
      res.json(newUserResponse);
    } catch (error) {
      //res.status(404);
      res.json({
        Error: error,
      });
    }
  });

  
  app.listen(3002,()=>{
    console.log("server started on the port 3002")
  });