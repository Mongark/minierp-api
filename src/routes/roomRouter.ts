import ControllerFactory from "../generators/Factories/ControllerFactory";
import RoomModel from "../data/models/RoomModel";
import RouterConfig from "../generators/CommonTypes/RouterConfig";
import RouterFactory from "../generators/Factories/RouterFactory";

const config: RouterConfig[] = [
    {
        type:       "GET",
        uri:        "/getOneById/:id",
        middleware: {
            type: "GET_BY_ID",
            model: RoomModel,
        },
   },
    {
        type:       "GET",
        uri:        "/getAll",
        middleware: {
            type: "GET_ALL",
            model: RoomModel,
        },
    },
    {
        type:       "GET",
        uri:        "/getCount",
        middleware: {
            type: "GET_COUNT",
            model: RoomModel,
        },
    },
    {
        type:       "POST",
        uri:        "/postOne",
        middleware: {
            type: "POST_ONE",
            model: RoomModel,
        },
    },
    {
        type:       "PATCH",
        uri:        "/updateOneById/:id",
        middleware: {
            type: "UPDATE_BY_ID",
            model: RoomModel,
        },
    },
    {
        type:       "DELETE",
        uri:        "/deleteOneById/:id",
        middleware: {
            type: "DELETE_BY_ID",
            model: RoomModel,
        },
    },
];

const RoomRoutes = RouterFactory.createRoute(config);

export default RoomRoutes;
