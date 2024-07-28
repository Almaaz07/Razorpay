import express from "express";
import { instance } from "../server.js";

export const checkout =async(req, res)=>{

const options = {
  amount: Number(req.body.amount*100),  // amount in the smallest currency unit
  currency: "INR",
};
const order = await instance.orders.create(options);
res.status(201).json({success:true,order})
console.log(order)
}




export const PaymentVerification =async(req, res)=>{
console.log(req.body)

res.status(201).json({success:true})

}