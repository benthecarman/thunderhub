import { Module } from '@nestjs/common';
import { AccountsModule } from '../accounts/accounts.module';
import { NodeModule } from '../node/node.module';
import { WsModule } from '../ws/ws.module';
import { SubService } from './sub.service';

@Module({
  imports: [NodeModule, AccountsModule, WsModule],
  providers: [SubService],
})
export class SubModule {}
