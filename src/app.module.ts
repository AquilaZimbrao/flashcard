import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { DatabaseModule } from './database/database.module';
import { CardModule } from './module/card/card.module';

@Module({
  imports: [
    DatabaseModule,
    CardModule,
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
  ]
})
export class AppModule {}
