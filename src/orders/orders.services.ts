import { Injectable } from "@nestjs/common";
import { GenerateOrder } from "./dto/generate-order.dto";

@Injectable()
export class OrderService {
    public orders: GenerateOrder[] = [{
        id: '1',
        amount: 450,
        userId: 1
    }];

    findAll(): GenerateOrder[] {
        return this.orders;
    }

    insertOrder(data): {} {
        return {};
    }
}