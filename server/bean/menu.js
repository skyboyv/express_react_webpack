
class menu {

    constructor(){
        this.element = {}
    }
    set id(id){
        this.element.id = id;
    }
    get id(){
        return this.element.id;
    }

    set menuName(menuName){
        this.element.menuName = menuName;
    }
    get menuName(){
        return this.element.menuName;
    }

    set childList(childList){
        this.element.childList = childList;
    }

    get childList(){
        return this.element.childList;
    }

}

module.exports={
    menu:menu
}
