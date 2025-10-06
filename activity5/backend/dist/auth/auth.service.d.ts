import { JwtService } from '@nestjs/jwt';
import { DatabaseService } from '../database/database.service';
export declare class AuthService {
    private db;
    private jwtService;
    constructor(db: DatabaseService, jwtService: JwtService);
    register(username: string, password: string): Promise<{
        message: string;
        success: boolean;
    }>;
    login(username: string, password: string): Promise<{
        message: string;
        success: boolean;
        access_token?: undefined;
    } | {
        access_token: string;
        success: boolean;
        message?: undefined;
    }>;
}
