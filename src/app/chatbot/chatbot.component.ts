import { Component } from '@angular/core';

interface Message {
  from: string;
  content: string;
}

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css'],
})
export class ChatbotComponent {
  userInput: string = '';
  messages: Message[] = [];

  sendMessage(): void {
    const userMessage: Message = { from: 'user', content: this.userInput };
    this.messages.push(userMessage);
    this.userInput = '';

    // Simulate the bot's response (Replace this with your chatbot logic)
    setTimeout(() => {
      const botMessage: Message = {
        from: 'bot',
        content: `This is a sample response from the bot for: "${userMessage.content}"`,
      };
      this.messages.push(botMessage);
    }, 500);
  }
}
