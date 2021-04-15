import { IsNotEmpty } from 'class-validator';

export class BracerDto {
  @IsNotEmpty()
  number : string

  @IsNotEmpty()
  price : number

  @IsNotEmpty()
  weight : number

  @IsNotEmpty()
  material : string

}