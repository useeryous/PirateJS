function frontend() {

    //gets the body tag
    let body = document.getByTagName('body');

    let topbar = document.creteElement('div');
    let arrowleft = document.createElement('div');
    let arrowright = document.createElement('div');
    let refresh = document.createElement('div');
    let search = document.createElement('div');
    let menu = document.createElement('div');
    let logo = document.createElement('div');
    let title = document.createElement('div');

    let proxy = document.createElement('iframe');


    //sets all the elements in the body to update the body with loaded tags
    for (let i = 0; i < body.length; i++) {
        body[i].appendChild();
    }
}