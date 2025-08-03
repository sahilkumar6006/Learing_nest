import { Test, TestingModule } from '@nestjs/testing';
import { RolesauthController } from './rolesauth.controller';

describe('RolesauthController', () => {
  let controller: RolesauthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RolesauthController],
    }).compile();

    controller = module.get<RolesauthController>(RolesauthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
