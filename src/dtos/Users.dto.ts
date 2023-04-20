import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDTO {
    @IsNotEmpty()
    name: String;

    @IsEmail()
    email: String;
}
