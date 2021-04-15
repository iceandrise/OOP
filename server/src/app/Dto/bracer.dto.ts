import { IsNotEmpty } from 'class-validator';

export class BracerDto {
  @IsNotEmpty()
  img : string

  @IsNotEmpty()
  number : string

  @IsNotEmpty()
  price : number

  @IsNotEmpty()
  weight : number

  @IsNotEmpty()
  material : string

  @IsNotEmpty()
  type : string

}