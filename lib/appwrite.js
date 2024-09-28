import { Account, Client, ID } from 'appwrite';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    apikey: 'standard_a87dd417357b50c3fdbf5b1d90e8e5a64cec1bddc48c96040e9d32b6d95b7468bee062f0ac49b542dd923ab1728d6eebf4f7aa5d74fe6a57ea64752dbd15228fc814049a8a0da8427206e63ce5d4162ab8ac705e069fcd3f5029b682bcfc85bf831bf9a938a5becf82fa2d384eee0b786c7dfea3c0085094d51d4b158dad6e19',
    projectkey: '66f6f9290002ba84fe7d'
}

const client = new Client();

client
    .setEndpoint(config.endpoint)
    .setProject(config.projectkey);


const account = new Account(client);

export const createUser = async (email, password, username)=> {
    // Register User
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        )
        
        if(!newAccount) throw Error();

    } catch (error) {
        console.log(error);
        throw new Error(error);

    }
}

export async function signIn(email, password) {
    try {

        const session = await account.createEmailPasswordSession(email, password);

        return session;

    } catch (error) {
        throw new Error(error);
    }
}
export async function signOut() {
    try {
        await account.deleteSession('current');
        console.log('User signed out successfully');
    } catch (error) {
        console.log('Error during sign out:', error);
        throw new Error(error);
    }
}

export const checkAuth = async () => {
    try {
      const user = await account.get(); // Get current user session
      return user;
    } catch (error) {
      console.log('User is not authenticated', error);
      return null;
    }
  };

    