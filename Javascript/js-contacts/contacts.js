const contacts = [
	{
		firstName: 'Marie',
		lastName: 'Dupont',
		email: 'marie.dupont@example.com',
		phone: '+33 6 12 34 56 78',
		isSubscribed: true,
	},
	{
		firstName: 'Jean',
		lastName: 'Martin',
		email: 'jean.martin@example.com',
		phone: '+33 6 87 65 43 21',
		isSubscribed: false,
	},
	{
		firstName: 'Sofia',
		lastName: 'Nguyen',
		email: 'sofia.nguyen@example.com',
		phone: '+33 6 45 67 89 01',
		isSubscribed: true,
	},
	{
		firstName: 'Luca',
		lastName: 'Rossi',
		email: 'luca.rossi@example.com',
		phone: '+39 333 123 4567',
		isSubscribed: false,
	},
    {
        firstName: 'Sarah',
        lastName: 'clement',
        email: 'Sarah.clement@example.com',
        phone: '+33 6 12 34 56 78',
        isSubscribed: false,
	},
];


//Etape 2
//On parcours le tableau avec forEach qui va parcourir chaque ligne et on affiche les informations sélectionnées
//contacts.forEach((elements) => console.log(elements.firstName + " " + elements.lastName + " : " + elements.email));

//Etape 3
//ici avec filter on crée un nouveau tableau avec uniquement les contacts abonnés et on affiche ce dernier
//const subscribedContacts = contacts.filter((elements) => elements.isSubscribed);
//console.log(subscribedContacts);

//Etape 4
//On utilise map pour créer un nouveau tableau avec uniquement les emails des contacts
//const contactEmails = contacts.map((elements) => elements.email);
//console.log(contactEmails);

//Etape 5
//On utilise find pour rechercher le premier contact avec le prénom Sarah; qui sera stocké dans foundContact et ensuite affiché
//const foundContact = contacts.find((elements) => elements.firstName === 'Sarah');
//console.log(foundContact);

//Etape 6
const contactNames = contacts.map((elements) => elements.lastName);
console.log(contactNames.join(', '));