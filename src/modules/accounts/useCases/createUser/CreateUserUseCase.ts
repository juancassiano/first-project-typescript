import { inject, injectable } from "tsyringe";

import { ICreateUsersDTO } from "../../dtos/ICreateUsersDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

class CreateUserUseCase {
  constructor(
    @inject()
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    driver_license,
    name,
    email,
    password,
    username,
  }: ICreateUsersDTO): Promise<void> {
    await this.usersRepository.create({
      driver_license,
      name,
      email,
      password,
      username,
    });
  }
}

export { CreateUserUseCase };
