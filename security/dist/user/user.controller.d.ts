import { UserService } from './user.service';
import { RegisterDto } from './dto/register.dto';
import { type Request, type Response } from 'express';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    setCookie(res: Response): Response<any, Record<string, any>>;
    getCookie(req: Request): {
        cookie_cua_ban_la: any;
    };
    setSession(req: Request): {
        message: string;
    };
    getSession(req: Request): {
        session_cua_ban_la: any;
    };
    register(dto: RegisterDto): any;
}
