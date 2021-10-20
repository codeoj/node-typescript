interface Types {
   name: string;
   duration: number;
   description: string
}

class CreateService {
   execute({ name, duration, description }: Types) {
      console.log(name, duration, description)
   }
}

export default new CreateService;