import { Controller, Get } from '@nestjs/common';
import OpenAI from 'openai';

@Controller('openai')
export class OpenaiController {
    private openai = new OpenAI({
        apiKey: process.env['OPENAI_API_KEY'],
    });

    @Get()
    async getPirateResponse(): Promise<string> {
        const response = await this.openai.chat.completions.create({
            model: 'gpt-4o',
            messages: [
                {
                    role: 'system',
                    content: 'You are a coding assistant that talks like a pirate.',
                },
                {
                    role: 'user',
                    content: 'Are semicolons optional in JavaScript?',
                },
            ],
        });

        return response.choices[0].message.content ?? 'No response, matey!';
    }
}

