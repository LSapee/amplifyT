import './App.css';
import {Amplify} from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Authenticator } from '@aws-amplify/ui-react';
Amplify.configure(awsconfig);

function App() {
  return (
      <Authenticator>
          {({ signOut, user }) => (
              <main>
                  <h1>Hello {user.username}</h1>
                  <button onClick={signOut}>Sign out</button>
              </main>
          )}
      </Authenticator>
      //
      // <div className="App">
      //
      //     <label for="userId">ID</label>
      //     <input id="userId" type="text"/>
      //     <br/>
      //     <label for="passWord">password</label>
      //     <input id="passWord" type="text"/>
      //     <button> ㅇㅇㄴㅁ</button>
      // </div>
  );
}

export default withAuthenticator(App);
