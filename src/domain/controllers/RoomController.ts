import express from "express";
import RoomModel from "../../models/common/room";
import * as RoomService from "../services/RoomService";

async function getOne( req: express.Request, res: express.Response ) {
    try{
        const data = await RoomService.getOne( req.params.id );
        res.status( 200 ).json( data );
    }
    catch( error: any ){
        res.status( 500 ).json({ message: error.message });
    }
}

async function getCount(req: express.Request, res: express.Response) {
    try{
        const count = await RoomService.getCount();

        res.status(200).send(count);
    }
    catch(error: any){
        res.status(500).send({ message: error.message })
    }
}

async function getAll(req: express.Request, res: express.Response) {
    try{
        const data = await RoomService.getAll();

        res.status(200).json(data)
    }
    catch(error: any){
        res.status(500).json({ message: error.message })
    }
}

async function postOne(req: express.Request, res: express.Response) {
    try {
        const data = RoomService.postOne( req.body );

        res.status(200).json( data );
    }
    catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

async function updateById(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
        const id = req.params.id;
        const updatedData = req.query;
        const options = { new: true };

        const result = await RoomModel.findByIdAndUpdate(
            id, updatedData, options
        );

        res.status(200).send(result)
    }
    catch (error: any) {
        res.status(500).json({ message: error.message })
    }
}

async function deleteOne(req: express.Request, res: express.Response) {
    try{
        const result = RoomService.deleteOne(req.params.id);

        res.status(200).send(result);
    }
    catch(error: any){
        res.status(500).json({ message: error.message })
    }
}

export {
    deleteOne,
    getOne,
    getAll,
    getCount,
    postOne,
    updateById,
};