export default class Loader{

    static start(){
        const div = document.createElement('div');
        div.id = 'loader';
        
        const i = document.createElement('i');
        i.classList.add('bi','bi-cookie')

        div.append(i)
        document.body.append(div)
    }

    static stop(){
        const loaderElement = document.getElementById('loader');
        loaderElement.remove()
    }

}