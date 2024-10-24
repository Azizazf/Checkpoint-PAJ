//Tâche 01:
//Itérer avec Async/Await : Ecrire une fonction async iterateWithAsyncAwait qui 
//prend un tableau de valeurs et enregistre chaque valeur avec un délai de 1 seconde
// entre les enregistrements.

// 

const saveValue = (value) => { // Créons une fonction saveValue qui prend une valeur et la sauvegarde

    return new Promise((resolve) => { // Créons une promesse pour enregistrer la valeur

        console.log(`Enregistrement de : ${value}`); // Affichons le message d'enregistrement

        setTimeout(() => { // Utilisons setTimeout pour simuler un délai d'enregistrement
            console.log(`Enregistrement de ${value} terminé`);
            resolve();
        }, 500);
    });
}


// Notre fonction async / await qui prend un tableau de valeurs et enregistre chaque valeur avec un délai de 1 seconde entre les enregistrements.

const iterateWithAsyncAwait = async (values) => { 
    for (let i = 0; i < values.length; i++) { // Itérons sur les valeurs

        await saveValue(values[i]); // Attendre que la valeur soit enregistrée

        await new Promise((resolve) => setTimeout(resolve, 1000));
        // attendre 1 seconde avant de passer à la valeur suivante  
    }
    console.log('Toutes les valeurs ont été enregistrées');

};


// Executons la fonction avec un tableau 

iterateWithAsyncAwait([1, 2, 3, 4]); // Appelons la fonction iterateWithAsyncAwait avec un tableau de valeurs


// Tâche 02
// Attendre un appel : Créer une fonction asynchrone waitCall qui simule l'obtention de données à partir d'une API.
// Utilisez wait pour attendre la réponse de l'API, puis enregistrez les données.

const fetchDataFromApi = () => { // Créons une fonction fetchDataFromApi pour simuler l'obtention de données à partir d'une API

    return new Promise((resolve) => { // Créons une promesse pour simuler l'obtention de données

        setTimeout(() => { // Utilisons setTimeout pour simuler un délai de réponse de l'API
            const fData = { id: 1, name: 'kza', Number: 771475900 }; // Données récupérées de l'API

            console.log('Données récupérées de l\'API');
            resolve(fData);
            console.log('Données récupérées',fData );
        }, 6000);
    });
}

const waitCall = async () => { // Créons une fonction asynchrone waitCall qui simule l'obtention de données à partir d'une API
    try {
        console.log('Appel de l\'API en cours');

        const data = await fetchDataFromApi(); // Attendre la réponse de l'API

        console.log('Données enregistrées', data);

    } catch (error) {
        console.error('Une erreur s\'est produite lors de l\'appel de l\'API', error); // Gérons les erreurs
    }
};

// Exécutons la fonction waitCall
waitCall();

// tache 03
// Gérer les erreurs avec Async/Await : Modifiez la fonction waitCall pour gérer les erreurs de manière élégante.
// Si l'appel à l'API échoue, attrapez l'erreur et enregistrez un message d'erreur convivial.
// Chaîner Async/Await : Écrivez une fonction chainedAsyncFunctions qui appelle trois fonctions asynchrones distinctes
//de manière séquentielle. Chaque fonction doit enregistrer un message après un délai d'une seconde. Enchaînez ces fonctions
// en utilisant wait.

const waitCallWithErrorHandling = async () => { // Créons une fonction asynchrone waitCallWithErrorHandling pour gérer les erreurs de manière élégante
    try {
        console.log('Appel de l\'API en cours');

        const data = await fetchDataFromApi(); // Attendre la réponse de l'API

        console.log('Données enregistrées', data);

    } catch (error) {
        console.error('Une erreur s\'est produite lors de l\'appel de l\'API', error); // Gérons les erreurs
    }
};

const saveMessage = (message) => { // Créons une fonction saveMessage qui prend un message et le sauvegarde
    return new Promise((resolve) => {
        console.log('Merci de recharger la page');
        setTimeout(() => { // Utilisons setTimeout pour simuler un délai d'enregistrement
            console.log(`Enregistrement de ${message} terminé`);
            resolve();
        }, 1000);
    });
}

const chainedAsyncFunctions = async () => { // Créons une fonction asynchrone chainedAsyncFunctions qui appelle trois fonctions asynchrones distinctes de manière séquentielle
    try {
        await saveMessage('Première fonction');
        await saveMessage('Deuxième fonction');
        await saveMessage('Troisième fonction');
    } catch (error) {
        console.error('Une erreur s\'est produite lors de l\'appel de l\'API', error);
    }
};
