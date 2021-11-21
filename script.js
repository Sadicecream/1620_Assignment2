var contactList = [  
	{ 
		name: "Oliver Queen", 
		phone: "778-555-1234", 
		address: "101 Main St, Star City, USA",    
		email: "greenarrow@watchtower.com",  
	},   
	{    
		name: "Jessica Cruz",    
		phone: "123-555-5555",    
		address: "Portland Oregon",    
		email: "greenlantern@watchtower.com",  
	}
];

var contact = [  
	{ 
		name: "Oliver Queen", 
		phone: "778-555-1234", 
		address: "101 Main St, Star City, USA",    
		email: "greenarrow@watchtower.com",  
	}
]

console.log(contact[0].phone)
function insertDOMContact(word) {
    return `
        <a href="page3.html"><div class="contact">${word}</div></a>

    `
}

function cleanUpIndex(){
    var clean = document.querySelectorAll('div.contact')
    for (i=0; i<clean.length; i++){
        clean[i].remove()
    }
}


function createSingleIndex(contact){
    const section = document.querySelector('.main')
    section.insertAdjacentHTML('beforeend', insertDOMContact(contact[0].name))
}


function renderIndex(contactList){
    const section = document.querySelector('.main')
    for (var obj of contactList){
        section.insertAdjacentHTML('afterbegin', insertDOMContact(obj.name))
    }
}

