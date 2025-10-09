import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Template } from './entities/template.entity';

@Injectable()
export class TemplatesService {
  constructor(
    @InjectRepository(Template)
    private templateRepository: Repository<Template>,
  ) {}

  async create(templateData: Partial<Template>): Promise<Template> {
    // 提取模板中的变量
    const variables = this.extractVariables(templateData.content || '');
    
    const template = this.templateRepository.create({
      ...templateData,
      variables,
    });
    
    return await this.templateRepository.save(template);
  }

  async findById(id: string): Promise<Template> {
    const template = await this.templateRepository.findOne({
      where: { id },
      relations: ['author', 'team'],
    });

    if (!template) {
      throw new NotFoundException('Template not found');
    }

    return template;
  }

  async findByTeam(teamId: string): Promise<Template[]> {
    return await this.templateRepository.find({
      where: [
        { team_id: teamId, is_active: true },
        { team_id: null, is_active: true }, // 全局模板
      ],
      relations: ['author'],
      order: { name: 'ASC' },
    });
  }

  async findByAuthor(authorId: string): Promise<Template[]> {
    return await this.templateRepository.find({
      where: { author_id: authorId, is_active: true },
      order: { name: 'ASC' },
    });
  }

  async renderTemplate(templateId: string, variables: Record<string, any>): Promise<string> {
    const template = await this.findById(templateId);
    
    let content = template.content;
    
    // 替换变量
    for (const [key, value] of Object.entries(variables)) {
      const regex = new RegExp(`\\{${key}\\}`, 'g');
      content = content.replace(regex, String(value));
    }
    
    return content;
  }

  async update(id: string, updateData: Partial<Template>): Promise<Template> {
    if (updateData.content) {
      updateData.variables = this.extractVariables(updateData.content);
    }
    
    await this.templateRepository.update(id, updateData);
    return await this.findById(id);
  }

  async delete(id: string): Promise<void> {
    await this.templateRepository.update(id, { is_active: false });
  }

  private extractVariables(content: string): string[] {
    const regex = /\{([^}]+)\}/g;
    const variables: string[] = [];
    let match;
    
    while ((match = regex.exec(content)) !== null) {
      if (!variables.includes(match[1])) {
        variables.push(match[1]);
      }
    }
    
    return variables;
  }

  async getPopularTemplates(teamId: string, limit: number = 10): Promise<Template[]> {
    // TODO: 实现基于使用频率的热门模板查询
    return await this.templateRepository.find({
      where: { team_id: teamId, is_active: true },
      order: { created_at: 'DESC' },
      take: limit,
    });
  }
}