import {object, string, number, boolean, TypeOf, z} from 'zod';


export const loginUserSchema = object({
    body: object({
        email: string({
            required_error: "Email address is required",
        }).email("Invalid email address"),
        password: string({
            required_error: "Password is required",
        }).min(8, "Password MUST be more than 8 characters"),
    })
})

export const productSchema = object({
    body: object({
      id: string(),
      slug: string(),
      label: string(),
      category: string(),
      prevPrice: number(),
      img: string().array(),
      currPrice: string(),
      color: string().array(),
      isNew: boolean().optional(),
    }),
});
  

export type TLoginUserInput = TypeOf<typeof loginUserSchema>['body'];
export type TProductInput = TypeOf<typeof productSchema>['body'];