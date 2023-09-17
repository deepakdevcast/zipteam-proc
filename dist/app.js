"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_js_1 = __importDefault(require("./api/routes/user.js"));
const httpPort = 4000;
const initHttpServer = () => {
    const httpServer = (0, express_1.default)();
    httpServer.use(express_1.default.json());
    httpServer.use('/user', user_js_1.default);
    httpServer.listen(httpPort, () => console.log('External API Server listening to port:', httpPort));
};
initHttpServer();
