class Stack{
    constructor(){
        this.Size = 10;
        this.pushCounter = 0;
        this.List = [];
        this.List.length = 10;
        this.Top = 0;

        console.log('==>Stack is created!\n');
    }
    Push(element){
        if(!this.isFull()){
            console.log('==>Element('+element+') is added to Stack!');
            console.log('\t==>Stack is not Full!');

            this.List[this.Top] = element;
            this.Top++;

            console.log('\t==>List :', this.List);
            console.log('\t==>Top : ' + this.Top+'\n');
            
        }else{
            console.log('==>Stack is Full!');
            console.log('\t==>No element can be added to Stack!\n')
        }
    }
    //pops from the stack
    Pop(){
        if(!this.isEmpty()){
            console.log('==>Able to pop from Stack!')

            this.Top--;

            console.log('\t==>Poped from stack!\n');
        }else{
            console.log('==>Cannot pop from stack!')
            console.log('\t==>Stack is Empty!\n');
        }
    }
    //checking if stack is full or not
    isFull(){
        if(this.Top+1 == this.Size){
            return true;
        }else{
            return false;
        }
    }
    //checking if stack is empty or not
    isEmpty(){
        if(this.Top == 0){
            return true;
        }else{
            return false;
        }
    }
    //printing the elements of Stack
    printStack(){
        var counter = 0;
        while(counter != this.Top){
            console.log(this.List[counter]);
            counter++;
        }
        console.log('\n');
    }
}

module.exports = Stack;
