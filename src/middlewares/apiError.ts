import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import { Request, Response } from "express";
import { timestamp } from "rxjs";

@Catch(HttpException)
export class apiError implements ExceptionFilter{
    catch(exception: HttpException, host: ArgumentsHost) {
        const context = host.switchToHttp();
        const response = context.getResponse<Response>();
        const status = exception.getStatus() || 500;

        console.log("EX>>>", exception.message);
        response.status(status).json({
            success: false,
            message: exception.message || 'Something went wrong'
        });
    }
}