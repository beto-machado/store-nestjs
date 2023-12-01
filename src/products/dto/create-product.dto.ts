import { ArrayMinSize, IsArray, IsInt, IsNotEmpty, IsNumber, IsPositive, MaxLength, ValidateNested } from "class-validator";
import { CaracteristicaProdutoDTO } from "./characteristics-product.dto";
import { ImagemProdutoDTO } from "./image-product.dto";
import { Type } from "class-transformer";

export class CreateProductDto {

  @IsInt({ message: 'Informe um id de usuário' })
  userId: number;

  @IsNotEmpty({ message: 'Informe um nome para o produto' })
  name: string;

  @IsNumber({ maxDecimalPlaces: 2 },
  { message: 'O valor do produto precisa ter até duas casas decimais' })
  @IsPositive({ message: 'O valor do produto precisa ser um número positivo' })
  value: number;

  @IsInt({ message: 'A quantidade precisa ser um número inteiro' })
  @IsPositive({ message: 'A quantidade precisa ser um número igual ou maior que zero' })
  quantity: number;

  @IsNotEmpty({ message: 'A descrição não pode ser vazia' })
  @MaxLength(1000, { message: 'A descrição não pode ter mais de 1000 caracteres' })
  description: string;

  @IsArray({ message: 'A lista de características do produto precisa ser um array' })
  @ArrayMinSize(3, { message: 'A lista de características do produto precisa ter pelo menos 3 itens' })
  @ValidateNested({ each: true })
  @Type(() => CaracteristicaProdutoDTO)
  characteristics: CaracteristicaProdutoDTO[];

  @IsArray({ message: 'A lista de imagens do produto precisa ser um array' })
  @ArrayMinSize(1, { message: 'A lista de imagens do produto precisa ter pelo menos 1 item' })
  images: ImagemProdutoDTO[];

  @IsNotEmpty( { message: 'Informe uma categoria para o produto' })
  category: string;
}
