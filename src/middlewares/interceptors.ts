import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable, map } from "rxjs";

@Injectable()
export class Interceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> {
        console.log("Before...");
        return next.handle().pipe(map((data) => {
            console.log(">>>>", data);
            return { success: true, msg: `Users found`, data: data }
        }));
    }
}