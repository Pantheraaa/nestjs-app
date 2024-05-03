import { Injectable } from "@nestjs/common";
import { UserDto } from "./dto/generate-user.dto";
import { Exception } from "src/middlewares/exception";

@Injectable()
export class UserService {
    private users: UserDto[] = [{id:1, name: "Rahul", email: "ra"}];
    // private users: UserDto[] = [];

    findUsers(): UserDto[] {
        // throw Exception.notFound();
        // if (!this.users.length) throw Exception.notFound("User not found");
        return this.users;
    }

    findUserById(id: number): {} {
        return {};
    }

    insertUser(data): UserDto {
        this.users.push(data);
        return data;
    }

    updateUser(id: string) {
        return `User updated successfully`;
    }

    deleteUser(id: string) {
        return `User deleted successfully`;
    }
}