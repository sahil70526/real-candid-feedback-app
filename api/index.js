import express from 'express'
import app from './firbase';

const app1= express();

app1.use(express.urlencoded({extended:true}));