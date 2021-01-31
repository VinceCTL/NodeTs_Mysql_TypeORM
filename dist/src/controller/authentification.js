"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthentificationMaker = void 0;
const express_1 = __importDefault(require("express"));
class AuthentificationMaker {
    constructor() {
        this.app = express_1.default();
        this.create = (app, jwt) => {
            app.post('/authenticate', (req, res) => {
                if (req.body.username === 'vincent') {
                    if (req.body.password === 123) {
                        const payload = {
                            check: true
                        };
                        let token = jwt.sign(payload, app.get('Secret'), {
                            expiresIn: 1440 // expires in 24 hours
                        });
                        res.json({
                            message: 'authentication done ',
                            token: token
                        });
                    }
                    else {
                        res.json({ message: "please check your password !" });
                    }
                }
                else {
                    res.json({ message: "user not found !" });
                }
            });
        };
        console.log('Auth Route Created.');
    }
}
exports.AuthentificationMaker = AuthentificationMaker;
//# sourceMappingURL=authentification.js.map