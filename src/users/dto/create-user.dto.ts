import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CreateUserDto {

  @IsNotEmpty({ message: 'Informe um nome de usuário' })
  name: string;

  @IsEmail(undefined, { message: 'Informe um email válido'})
  email: string;

  @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres' })
  password: string;
}
