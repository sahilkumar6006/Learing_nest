import { Injectable, OnModuleInit, OnApplicationShutdown } from '@nestjs/common';

@Injectable()
export class DatabaseService {
    private isConnected: boolean = false;

    OnModuleInit(signal: string) {
        this.isConnected = true;
        console.log('Database connection established');
    }

    OnApplicationShutdown(signal: string) {
        this.isConnected = false;
        console.log(`Database connection closed ${signal}`);
    }

    getStatus() {
        return this.isConnected ? 'Connected' : 'Disconnected';
    }
}
