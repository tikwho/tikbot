import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(userData: Partial<User> & { password?: string }): Promise<User> {
    const createData = { ...userData };
    
    // 如果提供了password，则加密并设置为password_hash
    if (userData.password) {
      createData.password_hash = await bcrypt.hash(userData.password, 10);
      delete createData.password;
    } else if (userData.password_hash) {
      createData.password_hash = await bcrypt.hash(userData.password_hash, 10);
    }
    
    const user = this.userRepository.create(createData);
    return await this.userRepository.save(user);
  }

  async findById(id: string): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { id },
      relations: ['team', 'agent_profiles'],
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    return await this.userRepository.findOne({
      where: { email },
      relations: ['team', 'agent_profiles'],
    });
  }

  async validatePassword(user: User, password: string): Promise<boolean> {
    // console.info(await bcrypt.hash(password, 10),"password---------");
    return await bcrypt.compare(password, user.password_hash);
  }

  async updateLastSeen(userId: string): Promise<void> {
    await this.userRepository.update(userId, {
      updated_at: new Date(),
    });
  }
}