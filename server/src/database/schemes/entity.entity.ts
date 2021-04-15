import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose";
import { Document } from "mongoose";


export type ModelDocument = Entity & Document

@Schema()
export class Entity {
  @Prop()
  img: string

  @Prop()
  number: string

  @Prop()
  weight: number

  @Prop()
  material: string

  @Prop()
  price: number

  @Prop()
  type: string
}

export const EntitySchema = SchemaFactory.createForClass(Entity)