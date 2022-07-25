import { Controller, Delete, Get, Head, Options, Patch, Post, Put } from '@nestjs/common';

@Controller('blue')
export class BlueController {
  @Get()  
  findGet() {
    return { nombre: 'get' }
  }

  @Post()
  findPost() {
    return { nombre: 'post'}
  }

  @Put()
  findPut() {
    return { nombre: 'put'}
  }

  @Patch()
  findPatch() {
    return { nombre: 'patch'}
  }

  @Delete()
  findDelete() {
    return { nombre: 'delete'}
  }

  @Options()
  findOptions() {
    return { nombre: 'options'}
  }

}
