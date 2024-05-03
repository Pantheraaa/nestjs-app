import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class TestMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log("This is class based middleware built for modules");
        next();
    }
}