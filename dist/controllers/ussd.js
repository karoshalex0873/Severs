"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ussdController = void 0;
const accountBalance = 1000;
const ussdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { sessionId, serviceCode, phoneNumber, text, } = req.body;
    let response = "";
    if (text == '') {
    }
    else if (text == '1') {
        response = `CON Choose account information you want to view
    1. Account number`;
    }
    else if (text == '2') {
        response = `END Your phone number is ${phoneNumber}`;
    }
    else if (text == '1*1') {
        const accountNumber = 'ACC100101';
        response = `END Your account number is ${accountNumber}`;
    }
    res.set("Content-Type", "text/plain");
    res.status(200).send(response);
});
exports.ussdController = ussdController;
