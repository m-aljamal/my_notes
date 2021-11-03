# Basics of nest

controller handle requests

# nest cli commands

nest g co => to create new controller

nest g co --no-spec => create controller with no spec file

nest g co modules/abc --dry-run => will only make you see the file and will not create the file modules/abc to where you want to save the file

nest g s => crate service

nest g module name_of_module

nest g class coffee/dto/update-coffee.dto --no-spec

# GET Request with param

@Get(':id')
findOne(@Param('id') id:string)

# POST request

@Post()
create(@Body() body)

# custom response

@Post()
@HttpCode(HttpStatus.here_you_can_choose_the_options) like HttpStatus.GONE
create(@Body() body)

- can do express responce

@Get()
findOne(@Res() response){
response.status(200).send('this action returns all ')
}

# Patch reuqest

@Patch("id")
update(@Param('id') id:string, @Body() body){

}

async update(id:string, updateCoffeeDto:UpdateCoffeeDto){
const coffee = await this.coffeeRepository.preload({
id: +id,
...updateCoffeeDto
})

    if(!coffee){
        throw new error
    }

    return this.coffeeRepository.save(coffee)

}

# delete

@Delete('id')
remove(@Param('id') id:string){

}

# Implement Pagination with Query Parameters.

@Get()
findOne(@Query() paginationQuery){
const {limit, offest} = paginationQuery

    return `Limit ${limit} offest ${offest}`

}

# dto

add readonly

readonly name:string

# dto for update

yarn add @nestjs/mapped-types

import {PartialType} from '@nestjs/mapped-types'

export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto){}

useValue: new ValidationPipe({
whitelist: true,
transform:true,  
forbidNonWhitelisted: true // this will throw error if any data sent outside the validation
}),

@Entity()

Or

@Entity('new_name') will change the name in data base with name



# create database form docker 

version: "3"

services:
  db:
    image: postgres
    restart: always
    ports:
    - "5432:5432"
    environment:
      POSTGRES_USER: michael
      POSTGRES_PASSWORD: pass123

docker-compose up -d



# create relation in entity

-coffee entity

@JoinTable()   =>  spicify the woner side of the relation in this example is the coffee table
@ManyToMany(type => Flavor, (flavor)=> flavor.coffees)
flavors: string[]


- flavor entity

@ManyToMany(type => Coffee, (coffee) => coffee.flavors )
coffees: Coffee[]

in coffee  module register the flavor table 

TypeOrmModule.forFeature([Coffee, Flavor])

in service file defind the relation: 

findAll(){
    return this.coffeeRepository.find({
        relations:["flavors"]
    })
}

and in findOne also

# cascading insert 

if add new coffee but the flavors are not present in database yet:

@JoinTable()   =>  spicify the woner side of the relation in this example is the coffee table
@ManyToMany(type => Flavor, (flavor)=> flavor.coffees,{
    cascade: true, // ['insert']
})
flavors: string[]

in coffee.dto:

@IsString({each:true})
readonly flavors: string[]


# adding pagination 

see video from folder 03 Add PostgreSQL with TypeORM  / 29 Adding Pagination

# use trasactions 

when there are two operations needs to success 

can create trasaction that acheve multi task in detabase and insure only happen if every thing is sececcful 

03 Add PostgreSQL with TypeORM  /  30 Use Transactions


# use index to posst search speed 

@Index(['name', 'type'])
@Entity()
export class Event{
    @Column()
    type:string 


    @Column()
    name: string
}

# 32 Setting up Migrations

create new config file in root directory 

command:  npx typeorm migration:create -n CoffeeRefactor



