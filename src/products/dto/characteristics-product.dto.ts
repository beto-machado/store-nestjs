import { IsNotEmpty } from "class-validator";

export class CaracteristicaProdutoDTO {

  @IsNotEmpty({ message: 'Informe um nome para a característica' })
  name: string;

  @IsNotEmpty({ message: 'Informe uma descrição para a característica' })
  description: string;
}
