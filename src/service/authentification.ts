import express, {Express} from 'express';

export class AuthentificationMaker {
    public app = express();

    constructor() {
        console.log('Auth Route Created.');
    }

    public create = (app: Express, jwt) => {
        app.post('/authenticate',(req,res)=>{
            if(req.body.name === 'vincent'){
                if(req.body.password===123){
                    const payload = {
                        check:  true
                    };
                    let token = jwt.sign(payload, app.get('Secret'), {
                        expiresIn: 1440 // expires in 24 hours
                    });
                    res.json({
                        message: 'authentication done ',
                        token: token
                    });
                } else {
                    res.json({message:"please check your password !"})
                }
            } else {
                res.json({message:"user not found !"})
            }
        })
    }
}
