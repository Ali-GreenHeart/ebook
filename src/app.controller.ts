import { Controller, Get, Post, Req, HttpCode, Body, UsePipes, ValidationPipe, Param, ParseIntPipe, Query } from '@nestjs/common';
import { AppService, Human } from './app.service';
import { Request, Response } from 'express'
import { CreateUserDTO } from './dtos/Users.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }


  @Get()
  getHello(): string {
    return this.appService.getHello('ali')
  }

  // decorator -> obyekte xususi xususiyyetleri vermek ucun ist olunur
  @Get('/users')
  getUsers(@Query('limit', ParseIntPipe) limit: number): Human[] {
    return this.appService.getUsers().slice(0, limit)
  }
  @Get('/users/:id')
  getUserById(@Param('id', ParseIntPipe) id: number): Human {
    return this.appService.getUsers().find((user) => user.id === id)
  }

  @Post('/users')
  @HttpCode(201)
  @UsePipes(new ValidationPipe())
  createUser(@Body() body: CreateUserDTO) {
    console.log(body)
    return 'salam'
  }
}
