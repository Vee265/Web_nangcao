import { Body, Controller, Post, Get, Req, Res } from '@nestjs/common';
import { UserService } from './user.service'; // Chấm slash gọi file cùng cấp thư mục
import { RegisterDto } from './dto/register.dto';
import { type Request, type Response } from 'express'; // Thêm chữ type để sửa lỗi TS1272

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // --- API TEST COOKIES (Yêu cầu 1) ---
  @Get('set-cookie')
  setCookie(@Res() res: Response) {
    res.cookie('user_token', '123456789_cookie_data', {
      maxAge: 900000, 
      httpOnly: true,
    });
    return res.send({ message: 'Đã cài đặt Cookie thành công!' });
  }

  @Get('get-cookie')
  getCookie(@Req() req: Request) {
    const cookieValue = req.cookies['user_token'];
    return { cookie_cua_ban_la: cookieValue || 'Không tìm thấy cookie!' };
  }

  // --- API TEST SESSION (Yêu cầu 2) ---
  @Get('set-session')
  setSession(@Req() req: Request) {
    req.session['user_info'] = {
      username: 'nguyen_yen_vi',
      role: 'student'
    };
    return { message: 'Đã cài đặt Session thành công!' };
  }

  @Get('get-session')
  getSession(@Req() req: Request) {
    const sessionData = req.session['user_info'];
    return { session_cua_ban_la: sessionData || 'Không tìm thấy session!' };
  }

  // API Đăng ký gốc (Yêu cầu 3)
  @Post('register')
  register(@Body() dto: RegisterDto) {
    return this.userService.register(dto);
  }
}