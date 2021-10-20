import { Request, Response } from 'express'
import CreateService from './CreateService'

export function createAction(request: Request, response: Response) {
   CreateService.execute({
      name: "Node",
      description: "uwhduisad",
      duration: 10,
   });

   return response.send();
}