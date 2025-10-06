import { OnModuleDestroy, OnModuleInit } from "@nestjs/common";
export declare class DatabaseService implements OnModuleInit, OnModuleDestroy {
    private pool;
    onModuleInit(): Promise<void>;
    query(sql: string, params?: any[]): Promise<import("mysql2/promise").QueryResult>;
    onModuleDestroy(): Promise<void>;
}
