class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

let head=null;

//Insert at top
function insertAtTop(data){
    if(head===null){
        let ntbi=new Node(data);
        head=ntbi;
    }
    else{
        let ntbi=new Node(data);
        ntbi.next=head;// Adress assigned.
        head=ntbi;
    }
}


//Print Link list - print function

function printFunction(){
    let curr=head;
    while(curr!==null){
        console.log(curr.data);
        curr=curr.next;
    }
}

//Delete from top

function deleteFromTop(){
    if(head===null)console.log("Nothing to delete");
    head=head.next;
}

//Insert in middle
//Pass position and data as arguments
function insertInMiddle(k,data){
    let curr=head;
    let count=1;
    while(curr!==null && count<k){
        count=count+1;
        curr=curr.next;
    }

    let a=curr;
    let ntbi=new Node(data);
    ntbi.next=a.next;
    a.next=ntbi;
}





//-------------

insertAtTop(1);
insertAtTop(2);
insertAtTop(3);
deleteFromTop();
insertInMiddle(2,6);

printFunction();