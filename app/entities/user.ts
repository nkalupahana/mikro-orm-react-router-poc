import { defineEntity, type InferEntity } from '@mikro-orm/core';

export const User = defineEntity({
   name: 'User',
   properties: p => ({
      id: p.integer().primary(),
      name: p.string()
   })
})

export interface IUser extends InferEntity<typeof User> {}