import { Request, Response } from "express";
import { sequelize } from "../instances/postgres";

export const HomeController = async (req: Request, res: Response) => {
    try{
        await sequelize.authenticate();
        console.log("conexão estabelecida com sucesso! C/ postgres")
    }catch(error){
        console.log("Deu Problema: ", error)
    }
    
}