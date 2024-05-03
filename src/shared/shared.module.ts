import { Module } from '@nestjs/common';

@Module({})
export class SharedModule {
    constructor() {
        console.log(`Shared module: `);
    }
}
