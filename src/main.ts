import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ credentials: true });
  const config = new DocumentBuilder()
    .setTitle('App API')
    .setDescription('API for school library')
    .setVersion('1.0')
    .addTag('lib')
    .addBasicAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api', app, document);

  await app.listen(process.env.Port || 3000);
}
bootstrap();
