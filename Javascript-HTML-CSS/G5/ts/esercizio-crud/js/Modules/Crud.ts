export default class Crud {

    static async getAll<T>(url: string): Promise<T> {

        const response: Response = await fetch(url);

        if (!response.ok) throw new Error(String(response.status));

        return <T> await response.json();
    }

    static async create<T, U>(url:string, object:T):Promise<U> {
        const response:Response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(object)
        })
  
        if (!response.ok) throw new Error(String(response.status));
  
        return <U> await response.json();
      }

    static async delete<T>(url:string, id:number):Promise<T> {
        const response:Response = await fetch(`${url}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (!response.ok) throw new Error(String(response.status));

        return <T> await response.json();
    }

}