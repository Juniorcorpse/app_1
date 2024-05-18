import { Request, Response } from "express";
import { User } from "../models/User";

export const HomeController = async (req: Request, res: Response) => {
    let users = await User.findAll({
        attributes:['name', 'age']
    });
    console.log("USUARIOS: ", JSON.stringify(users));   

    res.render('pages/home',{
        users
    });
}