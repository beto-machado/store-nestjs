import { IsString } from "class-validator";

export class ImagemProdutoDTO {

  @IsString({ message: 'Informe uma url para a imagem' })
  url: string;

  @IsString({ message: 'Informe uma descrição para a imagem' })
  description: string;
}
