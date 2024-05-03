import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Request } from "express";
import { Observable } from "rxjs";
import { Exception } from "./exception";

@Injectable()
export class UserGuard implements CanActivate{
    public key: string = 'BADGUYBILLIE';
    
    canActivate(context: ExecutionContext): boolean {
        const ctx = context.switchToHttp();
        const request = ctx.getRequest<Request>();
        console.log("Guard...");
        if (!request.headers.auth_token) {
            throw Exception.badRequest('Token is required');
        };
        return true;
    }
}