export default class Loader{

    static start():void{
        const div:HTMLDivElement = document.createElement('div');
        div.id = 'loader';
        
        const i:HTMLElement = document.createElement('i');
        i.classList.add('bi','bi-cookie');

        div.append(i);
        document.body.append(div);
    }

    static stop():void{
        const loaderElement = <HTMLDivElement|null> document.getElementById('loader');
        loaderElement?.remove()
    }

}