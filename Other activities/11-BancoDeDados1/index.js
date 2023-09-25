class BD {
    constructor(){
        this.data = {}
    }

    addData(id,value){
        let obj = {
            id:id,
            value:value
        }

        Object.assign(this.data, {[id]:obj});
    }

    listData(){
        for(const key in this.data){
            if(this.data.hasOwnProperty(key)){
                const item = this.data[key];
                console.log(`ID: ${item.id}, Value: ${item.value}`);
            }
        }
    }

    locateData(id){
        if(this.data.hasOwnProperty(id)){
            return this.data[id];
        }else{
            return null;
        }
    }

    updateData(id,value){
        if(this.data.hasOwnProperty(id)){
            this.data[id].value = value;
            return true;
        }else{
            return false;
        }
    }

    removeData(id){
        if(this.data.hasOwnProperty(id)){
            delete this.data[id];
            return true;
        }else{
            return false;
        }
    }

    
}



const BD1 = new BD();

BD1.addData(1,'teste')
BD1.addData(2,'teste2')
BD1.addData(3,'teste3')

BD1.listData();

console.log(BD1.locateData(3))

BD1.updateData(1, 'Teste 1 bem sucedido');

BD1.listData();

BD1.removeData(2);

BD1.listData();