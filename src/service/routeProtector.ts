// @ts-ignore
import express, {Express} from 'express';

export class RouteProtector {

    // public ProtectedRoutes = express.Router();
    constructor(private ProtectedRoutes) {
    }

    public Protect = (app: Express, jwt) => {
        this.ProtectedRoutes.use((req, res, next) => {
            let token = req.headers['access-token'];

            // decode token
            if (token) {

                // verifies secret and checks if the token is expired
                jwt.verify(token, app.get('Secret'), (err, decoded) =>{
                    if (err) {
                        return res.json({ message: 'invalid token' });
                    } else {
                        // if everything is good, save to request for use in other routes
                        // @ts-ignore
                        req.decoded = decoded;
                        next();
                    }
                });

            } else {
                res.send({
                    message: 'No token provided.'
                });
            }
        })
    }
}
