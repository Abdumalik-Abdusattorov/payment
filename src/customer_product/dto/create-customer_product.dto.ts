import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateCustomerProductDto {
    @ApiProperty({example: 1, description: "Product Id"})
    @IsNumber()
    @IsNotEmpty()
    product_id: number;
}
