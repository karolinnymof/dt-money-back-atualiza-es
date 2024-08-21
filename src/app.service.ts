import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { CreateTransactionDTO } from './dto/create-transaction.dto';

@Injectable()
export class AppService {
  constructor(private readonly prismaService: PrismaService) {}

  async createTransaction(data: CreateTransactionDTO) {
    const createdTransaction = await this.prismaService.transaction.create({
      data,
    });

    return createdTransaction;
  }

  async listAll() {
    const transactions = await this.prismaService.transaction.findMany({
      orderBy: {
        createdAt: 'asc',
      },
    });
    return transactions;
  }

  async updateTransaction(id: string, data: Partial<CreateTransactionDTO>) {
    const updatedTransaction = await this.prismaService.transaction.update({
      where: { id },
      data,
    });
    return updatedTransaction;
  }

  async deleteTransaction(id: string) {
    const deletedTransaction = await this.prismaService.transaction.delete({
      where: { id },
    });
    return deletedTransaction;
  }
}
