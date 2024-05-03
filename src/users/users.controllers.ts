import { BadRequestException, Body, Controller, Delete, Get, HttpException, Param, ParseIntPipe, Patch, Post, UseFilters, UseGuards, UseInterceptors, ValidationPipe } from "@nestjs/common";
import { UserService } from "./users.services";
import { UserDto } from "./dto/generate-user.dto";
import { Exception } from "src/middlewares/exception";
import { HttpErrorByCode } from "@nestjs/common/utils/http-error-by-code.util";
import { apiError } from "src/middlewares/apiError";
import { UserGuard } from "src/middlewares/userGuard";
import { Interceptor } from "src/middlewares/interceptors";

@Controller('users')
export class UsersController {
    constructor(private userService: UserService) { }

    @Get()
    @UseFilters(apiError)
    @UseGuards(new UserGuard)
    @UseInterceptors(Interceptor)
    getUsers(): UserDto[] | any {
        // throw new Exception("Bad request babe");
        // throw Exception.badRequest()
        // try {
        return { users: this.userService.findUsers(), msg: "OK" };
        // } catch (err) {
        //     console.log("ERR", err);
        // if (err instanceof Exception) {
        //     console.log("IS INSTANCE");
        //     return err;
        // }

        // return err;
        // }
    }

    @Get('/:id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
        console.log(">>>>", typeof id);
        return this.userService.findUserById(id);
    }

    @Post()
    createUser(@Body(new ValidationPipe()) data: UserDto): UserDto {
        return this.userService.insertUser(data);
    }

    @Patch()
    updateUser(@Param('id') id) {
        return this.userService.updateUser(id);
    }

    @Delete()
    deleteUser(@Param('id') id) {
        return this.userService.deleteUser(id);
    }
}