import { Body, Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateTransactionDTO, UpdateTransactionDTO } from './dto/create-transaction.dto';

@Controller('/app/transaction')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/')
  async createTransaction(@Body() data: CreateTransactionDTO) {
    const createdTransaction = await this.appService.createTransaction(data);
    return createdTransaction;
  }
  @Get('/')
  async listAll() {
    const transactions = await this.appService.listAll();
    return transactions;
  }

  @Put(':id')
async updateTransaction(
  @Param('id') id: string,
  @Body() data: UpdateTransactionDTO
) {
  return this.appService.updateTransaction(id, data);
}


  @Delete(':id')
  async deleteTransaction(@Param('id') id: string) {
    return this.appService.deleteTransaction(id);
  }
}

