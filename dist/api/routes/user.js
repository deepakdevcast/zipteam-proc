"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const donationController_js_1 = __importDefault(require("../controller/donationController.js"));
const userRoutes = (0, express_1.Router)();
userRoutes.get('/:userId/donate', donationController_js_1.default);
exports.default = userRoutes;
