// TODO: organize json payload in CRUD

import { Request, Response, Router } from "express";
import RoomController from "../domain/controllers/RoomController";

import ControllerFactory from "../generators/Factories/ControllerFactory";
import RoomModel from "../data/models/RoomModel";

const RoomRoutes = Router();

// Post Method
RoomRoutes.post('/postOne', async(req: Request, res: Response) => {
    console.log("[ ROOM ][ postOne ]: ");
    try {
        RoomController.postOne(req, res);
    } catch (error) {
        res.send( error );
    }
});

// Get all Method
RoomRoutes.get('/getAll', async (req: Request, res: Response) => {
    console.log("[ ROOM ][ getAll ]: ");
    try {
        RoomController.getAll(req, res);
    } catch ( error ) {
        res.send( error );
    }
});

// Get count of document in Room collection in the database.
RoomRoutes.get('/getCount', async (req: Request, res: Response) => {
    console.log("[ ROOM ][ getCount ]");
    try {
        RoomController.getCount(req, res);
    } catch (error) {
        res.send( error );
    }
});

// Get by ID Method
RoomRoutes.get(
    '/getOneById/:id',

    ControllerFactory.create("GET_BY_ID", RoomModel)
);

// Update by ID Method
RoomRoutes.patch('/updateOneById/:id', ControllerFactory.create("UPDATE_BY_ID", RoomModel));

// Delete one by ID Method
RoomRoutes.delete('/deleteOneById/:id', ControllerFactory.create("DELETE_BY_ID", RoomModel));

export default RoomRoutes;