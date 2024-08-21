export interface CreateTransactionDTO {
   title: string;
   price: number;
   category: string; 
   type: string;
}    

export interface UpdateTransactionDTO {
   title?: string; 
   price?: number;
   category?: string;
   type?: string;
 }