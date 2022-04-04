#!/usr/bin/env node

const {faker} = require("@faker-js/faker")
console.log(faker.name.firstName()+ " "+ faker.name.lastName())