import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(body: {
        username: string;
        password: string;
    }): Promise<{
        message: string;
        success: boolean;
    }>;
    login(body: {
        username: string;
        password: string;
    }): Promise<{
        message: string;
        success: boolean;
        access_token?: undefined;
    } | {
        access_token: string;
        success: boolean;
        message?: undefined;
    }>;
    getProfile(req: any): any;
}
