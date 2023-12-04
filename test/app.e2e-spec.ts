import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
// import { asyncScheduler } from 'rxjs';

describe('Users', () => {
  let app: INestApplication;

  beforeAll(
    async () => {
      const moduleFixture: TestingModule = await Test.createTestingModule({
        imports: [AppModule],
      }).compile();

      app = moduleFixture.createNestApplication();
      await app.init();
    }, 10 * 60_000
  );

  afterAll(async () => {
    await app.close();
  });

  it('Can register a user' , ()=> {
    // TODO
  })

  it('Can get new registered user)', () => {
      return request(app.getHttpServer())
        .get('/users')
        .expect(200)
        .expect([]); // TODO
  });
});
