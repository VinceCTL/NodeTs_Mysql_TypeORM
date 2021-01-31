"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteProtector = void 0;
class RouteProtector {
    // public ProtectedRoutes = express.Router();
    constructor(ProtectedRoutes) {
        this.ProtectedRoutes = ProtectedRoutes;
        this.Protect = (app, jwt) => {
            this.ProtectedRoutes.use((req, res, next) => {
                let token = req.headers['access-token'];
                // decode token
                if (token) {
                    // verifies secret and checks if the token is expired
                    jwt.verify(token, app.get('Secret'), (err, decoded) => {
                        if (err) {
                            return res.json({ message: 'invalid token' });
                        }
                        else {
                            // if everything is good, save to request for use in other routes
                            // @ts-ignore
                            req.decoded = decoded;
                            next();
                        }
                    });
                }
                else {
                    res.send({
                        message: 'No token provided.'
                    });
                }
            });
        };
    }
}
exports.RouteProtector = RouteProtector;
//# sourceMappingURL=routeProtector.js.map