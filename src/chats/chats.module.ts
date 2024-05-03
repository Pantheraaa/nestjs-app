import { Module } from '@nestjs/common';
import { SharedModule } from 'src/shared/shared.module';

@Module({
    imports: [SharedModule]
})
export class ChatsModule {
    constructor() {
        console.log("Chats module");
    }
}
