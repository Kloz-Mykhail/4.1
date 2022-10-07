import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { engine } from 'express-handlebars';
import { join } from 'path';
import { ErrorFilter } from './error.filter';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors({ credentials: true });
  app.useStaticAssets(join(__dirname, '..', 'static'));
  app.engine(
    'hbs',
    engine({
      extname: 'hbs',
      helpers: {
        increment(number: number) {
          return number + 1;
        },
        decrement(number: number) {
          return number - 1;
        },
      },
    }),
  );
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  app.useGlobalFilters(new ErrorFilter());
  await app.listen(process.env.Port || 3000);
}
bootstrap();
