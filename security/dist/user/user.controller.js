"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const register_dto_1 = require("./dto/register.dto");
let UserController = class UserController {
    userService;
    constructor(userService) {
        this.userService = userService;
    }
    setCookie(res) {
        res.cookie('user_token', '123456789_cookie_data', {
            maxAge: 900000,
            httpOnly: true,
        });
        return res.send({ message: 'Đã cài đặt Cookie thành công!' });
    }
    getCookie(req) {
        const cookieValue = req.cookies['user_token'];
        return { cookie_cua_ban_la: cookieValue || 'Không tìm thấy cookie!' };
    }
    setSession(req) {
        req.session['user_info'] = {
            username: 'nguyen_yen_vi',
            role: 'student'
        };
        return { message: 'Đã cài đặt Session thành công!' };
    }
    getSession(req) {
        const sessionData = req.session['user_info'];
        return { session_cua_ban_la: sessionData || 'Không tìm thấy session!' };
    }
    register(dto) {
        return this.userService.register(dto);
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Get)('set-cookie'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "setCookie", null);
__decorate([
    (0, common_1.Get)('get-cookie'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getCookie", null);
__decorate([
    (0, common_1.Get)('set-session'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "setSession", null);
__decorate([
    (0, common_1.Get)('get-session'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getSession", null);
__decorate([
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof register_dto_1.RegisterDto !== "undefined" && register_dto_1.RegisterDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "register", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _a : Object])
], UserController);
//# sourceMappingURL=user.controller.js.map