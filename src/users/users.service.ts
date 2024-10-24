import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class UsersService {
  constructor(@InjectQueue('users') private usersQueue: Queue) {}

  async handleInAdaptor() {
    console.log('🚀 ~ handleInAdaptor ~:');
    const job = await this.usersQueue.add('create', {
      key: `ADAPTOR`,
    });
    return await job.finished();
  }

  async handleInBridge() {
    console.log('🚀 ~ handleInBridge ~:');
    const job = await this.usersQueue.add('create', {
      key: `BRIDGE`,
    });
    return await job.finished();
  }
}
