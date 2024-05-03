import { HttpException, HttpStatus } from "@nestjs/common";

export class Exception extends HttpException{
    constructor(type, msg) {
        super(msg, HttpStatus[`${type}`]);
    }

    static unauthorized(msg?) {
        return new Exception('UNAUTHORIZED', msg || "Unauthorized user");
    }

    static badRequest(msg?) {
        return new Exception('BAD_REQUEST', msg || "Bad request");
    }

    static notFound(msg?) {
        return new Exception('NOT_FOUND', msg || "Data not found");
    }
}