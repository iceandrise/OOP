import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type DiscountDocument = Discount & Document

@Schema()
export class Discount {
  @Prop({type: Date, default: new Date(Date.now()), required: true})
  start: Date

  @Prop({type: Date, default: new Date(Date.now()), required: true})
  end: Date

  @Prop({ unique : true})
  token: string 

  @Prop()
  discount: number
}

export const DiscountSchema = SchemaFactory.createForClass(Discount)