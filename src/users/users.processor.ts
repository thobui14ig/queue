import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('users')
export class UsersConsumer {
  @Process('create')
  transcode(job: Job<any>) {
    const { key } = job.data;

    if (key === 'ADAPTOR') {
      return this.handleOnAdaptor(key);
    }

    return this.handleOnBridge(key);
  }

  handleOnAdaptor(key: string) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('🚀 ~ handleOnAdaptor ~ wait ~ key:', key);

        resolve(true);
      }, 5000);
    });
  }

  handleOnBridge(key: string) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('🚀 ~ handleOnBridge ~ wait ~ key:', key);

        resolve(true);
      }, 5000);
    });
  }
}
