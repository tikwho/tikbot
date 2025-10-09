import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: { email: string; password: string }) {
    const user = await this.authService.validateUser(loginDto.email, loginDto.password);
    if (!user) {
      return { success: false, message: 'Invalid credentials' };
    }
    return await this.authService.login(user);
  }

  @Post('register')
  async register(@Body() registerDto: { 
    email: string; 
    password: string; 
    name: string; 
    tenant_name: string 
  }) {
    try {
      const user = await this.authService.register(registerDto);
      return await this.authService.login(user);
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  @UseGuards(JwtAuthGuard)
  @Post('refresh')
  async refresh(@Request() req) {
    return await this.authService.refreshToken(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Post('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}