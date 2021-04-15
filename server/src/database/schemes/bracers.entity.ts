import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose";
import { Document } from "mongoose";


export type BracersDocument = Bracers & Document

@Schema()
export class Bracers {
  @Prop()
  number: string

  @Prop()
  weight: number

  @Prop()
  material: string

  @Prop()
  price: number
}

export const BracersSchema = SchemaFactory.createForClass(Bracers)