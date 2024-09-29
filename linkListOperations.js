//  |Head|->|1||->|2||->|3||->|4||->null
// Reference to the first node not part of the link list POINT to the first node.
class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}


const one=new Node(1);
const two=new Node(2);
const three=new Node(3);
const four=new Node(4);

one.next=two;
two.next=three;
three.next=four;

let head=one;//POINTS to the first node in the LL

let curr=head;

while(curr!==null){
    console.log(curr.data);
    curr=curr.next;
}
